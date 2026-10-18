"use server"




export const getProperties = async ({ searchQuery }: {
    searchQuery?: { [key: string]: string | string[] | undefined }
}) => {

    // const searchTerm = `${searchQuery?.title ? `?title=${searchQuery.title}` : ""}`
    const params = new URLSearchParams();
    if (searchQuery && searchQuery.title) {
        params.set("title", searchQuery.title as string)
    }
    if (searchQuery && searchQuery.type) {
        params.set("type", searchQuery.type as string);
    }

    if (searchQuery && searchQuery.city) {
        params.set("city", searchQuery.city as string);
    }

    if (searchQuery && searchQuery.location) {
        params.set("location", searchQuery.location as string);
    }

    if (searchQuery && searchQuery.minPrice) {
        params.set("minPrice", searchQuery.minPrice as string);
    }

    if (searchQuery && searchQuery.maxPrice) {
        params.set("maxPrice", searchQuery.maxPrice as string);
    }

    if (searchQuery && searchQuery.page) {
        params.set("page", searchQuery.page as string);
    }




    const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties?${params.toString()}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    });

    const result = await res.json()
    return result.data;
}