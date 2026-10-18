"use server"

export const getPropertiesForHome = async () => {

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties?take=3`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 6,
            tags:['home-property']
        }
    });

    const result = await res.json()


    return result.data.data;
}