"use server"


import { PropertyCreateState } from "@/lib/type";
import { propertySchema } from "@/lib/validation/propertySchema";
import { getToken } from "@/utility/getToken";

export const propertyEditAction = async (prevState: PropertyCreateState, formData: FormData) => {
    const { accessToken } = await getToken()

    if (!accessToken) {
        return {
            success: false,
            statusCode: 401,
            message: "User is not logged in",
            data: null
        };
    }

    const id = formData.get("propertyId") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    const location = formData.get("location") as string;
    const city = formData.get("city") as string;
    const bedrooms = Number(formData.get("bedrooms"));
    const bathrooms = Number(formData.get("bathrooms"));
    const size = Number(formData.get("size"));
    const availability = formData.get("availability") as string;
    const categoryId = formData.get("categoryId") as string;
    const amenities = formData.get("amenities")
    const images = formData.get("images")

    const bodyPaylod = {  title, description, price, location, city, bedrooms, bathrooms, size, amenities, images, availability, categoryId, }

    const validData = propertySchema.safeParse(bodyPaylod)

    if (!validData.success) {
        return {
            success: false,
            statusCode: 400,
            message: "Please Provied valid input",
            data: null,
            errors: validData.error.flatten().fieldErrors,
        };
    }



    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/properties/${id}`,
        {
            method: "PATCH",
            headers: {
                cookie: `accessToken=${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(validData.data)
        }
    );



    if (!res.ok) {
        return {
            success: false,
            statusCode: res.status,
            message: "Failed to fetch single property",
            data: null
        };
    }

    const result = await res.json();
    return result
}