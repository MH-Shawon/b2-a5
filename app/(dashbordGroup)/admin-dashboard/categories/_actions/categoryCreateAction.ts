"use server";
import { CategoryCreateState } from "@/lib/AdminType";
import { getToken } from "@/utility/getToken";

export async function categoryCreateAction(
    prevState: CategoryCreateState,
    formData: FormData
): Promise<CategoryCreateState> {
    const name = formData.get("name")?.toString().trim();

    if (!name) {
        return {
            success: false,
            statusCode: 400,
            message: "Category name is required",
            data: null,
        };
    }


    const { accessToken } = await getToken();

    if (!accessToken) {
        return {
            success: false,
            statusCode: 401,
            message: "You are not logged in",
            data: null,
        };
    }

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/categories`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                cookie: `accessToken=${accessToken}`,
            },
            body: JSON.stringify({
                name,
            }),
        }
    );

    if (!res.ok) {
        return {
            success: false,
            statusCode: res.status,
            message: "Failed to create category",
            data: null,
        };
    }
    const result = await res.json();

    return result

}