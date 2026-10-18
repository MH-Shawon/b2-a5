"use server"



export const getPropertyCategories = async () => {

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    });

    const result = await res.json()

    return result.data;

}