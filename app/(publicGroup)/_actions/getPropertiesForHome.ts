"use server"

export const getPropertiesForHome = async () => {
    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties?take=3`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store",
        });

        if (!res.ok) {
            return [];
        }

        const result = await res.json();
        const properties = Array.isArray(result?.data)
            ? result.data
            : Array.isArray(result?.data?.data)
                ? result.data.data
                : [];

        return properties;
    } catch (error) {
        console.error("Failed to fetch featured properties:", error);
        return [];
    }
};