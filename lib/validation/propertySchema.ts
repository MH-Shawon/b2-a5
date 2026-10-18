import { z } from "zod";

const normalizeStringArray = (value: unknown) => {
    if (Array.isArray(value)) {
        return value.map((item) => String(item).trim()).filter(Boolean);
    }

    if (typeof value === "string") {
        return value
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);
    }

    return [];
};

export const propertySchema = z.object({
    title: z
        .string()
        .min(3, "Property title must be at least 3 characters")
        .max(100, "Property title is too long"),

    description: z
        .string()
        .min(10, "Description must be at least 10 characters"),

    price: z
        .number()
        .min(1, "Monthly rent is required")
        .refine((value) => Number(value) > 0, {
            message: "Price must be greater than 0",
        }),

    size: z
        .number()
        .min(1, "Property size is required")
        .refine((value) => Number(value) > 0, {
            message: "Size must be greater than 0",
        }),

    location: z
        .string()
        .min(3, "Location is required"),

    city: z
        .string()
        .min(2, "City is required"),

    bedrooms: z
        .number()
        .refine((value) => Number(value) >= 0, {
            message: "Invalid bedroom number",
        }),

    bathrooms: z
        .number()
        .refine((value) => Number(value) >= 0, {
            message: "Invalid bathroom number",
        }),

    amenities: z.preprocess(
        normalizeStringArray,
        z.array(z.string()).default([])
    ),

    images: z.preprocess(
        normalizeStringArray,
        z.array(z.string().url()).default([])
    ),

    availability: z.enum([
        "AVAILABLE",
        "RENTED",
        "UNAVAILABLE",
    ]),

    categoryId: z
        .string()
        .min(1, "Please select a category"),
});