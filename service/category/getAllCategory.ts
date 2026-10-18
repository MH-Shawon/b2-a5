
"use server"


export const getCategories = async () => {

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/categories`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );

    if (!res.ok) {
        return {
            success: false,
            statusCode: res.status,
            message: "Failed to Get categories",
            data: [],
        };
    }

    const result = await res.json()

    return result;
}