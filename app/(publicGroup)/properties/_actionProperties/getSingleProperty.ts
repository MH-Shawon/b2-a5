



export const getSingleProperty = async (id: string) => {

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 24,
            tags: ["single-property"]
        }
    });

    const result = await res.json();

    return result.data;
}