"use server"

import jwt, { JwtPayload } from "jsonwebtoken";
import { IProperty, PropertyCreateState } from "@/lib/type";
import { propertySchema } from "@/lib/validation/propertySchema";
import { getToken } from "@/utility/getToken";

const normalizeBackendErrors = (errorDetails: Array<{ field?: string; message?: string }> = []) => {
    return errorDetails.reduce<Record<string, string[]>>((acc, item) => {
        const field = item.field || "request";
        const message = item.message || "Validation error";
        acc[field] = [...(acc[field] || []), message];
        return acc;
    }, {});
};

const extractBackendErrors = (value: unknown): Array<{ field?: string; message?: string }> => {
    if (Array.isArray(value)) {
        return value as Array<{ field?: string; message?: string }>;
    }

    if (value && typeof value === "object") {
        return Object.entries(value as Record<string, string | string[]>).flatMap(([field, messages]) => {
            const normalizedMessages = Array.isArray(messages) ? messages : [messages];
            return normalizedMessages.map((message) => ({ field, message: String(message) }));
        });
    }

    return [];
};

const parseStringArray = (value: FormDataEntryValue | null | undefined) => {
    if (!value) return [];

    const text = String(value).trim();
    if (!text) return [];

    return text
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
};

export const propertyCreateAction = async (prevState: PropertyCreateState, formData: FormData): Promise<PropertyCreateState> => {
    try {
        const { accessToken } = await getToken();

        if (!accessToken) {
            return {
                success: false,
                statusCode: 401,
                message: "Please log in to add a property",
                data: null,
                errors: { authorization: ["Access token is required"] },
            };
        }

        const decoded = jwt.decode(accessToken) as JwtPayload | null;
        const role = decoded?.role as string | undefined;

        if (role !== "LANDLORD") {
            return {
                success: false,
                statusCode: 403,
                message: "Only landlords can add properties",
                data: null,
                errors: { authorization: ["Only landlords can add properties"] },
            };
        }

        const title = (formData.get("title") ?? "").toString().trim();
        const description = (formData.get("description") ?? "").toString().trim();
        const price = Number(formData.get("price"));
        const location = (formData.get("location") ?? "").toString().trim();
        const city = (formData.get("city") ?? "").toString().trim();
        const bedrooms = Number(formData.get("bedrooms"));
        const bathrooms = Number(formData.get("bathrooms"));
        const size = Number(formData.get("size"));
        const availability = (formData.get("availability") ?? "").toString();
        const categoryId = (formData.get("categoryId") ?? "").toString().trim();
        const amenities = parseStringArray(formData.get("amenities"));
        const images = formData.get("images") ? parseStringArray(formData.get("images")) : [];

        const bodyPayload = {
            title,
            description,
            price,
            location,
            city,
            bedrooms,
            bathrooms,
            size,
            amenities,
            images,
            availability,
            categoryId,
        };

        const validData = propertySchema.safeParse(bodyPayload);

        if (!validData.success) {
            return {
                success: false,
                statusCode: 400,
                message: "Please provide valid property details",
                data: null,
                errors: validData.error.flatten().fieldErrors,
            };
        }

        const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
                cookie: `accessToken=${accessToken}`,
            },
            body: JSON.stringify({
                ...validData.data,
                images: validData.data.images ?? [],
            }),
        });

        let result: {
            message?: string;
            statusCode?: number;
            data?: IProperty | null;
            errorDetails?: Array<{ field?: string; message?: string }>;
            errors?: unknown;
        } | null = null;

        try {
            result = (await res.json()) as {
                message?: string;
                statusCode?: number;
                data?: IProperty | null;
                errorDetails?: Array<{ field?: string; message?: string }>;
                errors?: unknown;
            };
        } catch {
            result = null;
        }

        if (!res.ok) {
            const backendErrors = normalizeBackendErrors(
                extractBackendErrors(result?.errorDetails ?? result?.errors ?? [])
            );
            const message = result?.message || "Validation Error";

            return {
                success: false,
                statusCode: res.status,
                message,
                data: null,
                errors: Object.keys(backendErrors).length ? backendErrors : { request: [message] },
            };
        }

        return {
            success: true,
            statusCode: result?.statusCode ?? res.status,
            message: result?.message || "Property created successfully",
            data: (result?.data as IProperty | null) ?? null,
            errors: {},
        };
    } catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong while creating the property";

        return {
            success: false,
            statusCode: 500,
            message,
            data: null,
            errors: { request: [message] },
        };
    }
};
