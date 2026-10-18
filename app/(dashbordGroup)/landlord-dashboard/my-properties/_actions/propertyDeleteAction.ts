"use server"


import { getToken } from "@/utility/getToken";

export const propertyDeleteAction = async (id: string) => {
    const { accessToken } = await getToken()

    if (!accessToken) {
        return {
            success: false,
            statusCode: 401,
            message: "User is not logged in",
            data: null
        };
    }



    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/landlord/properties/${id}`,
        {
            method: "DELETE",
            headers: {
                cookie: `accessToken=${accessToken}`,
            }
        }
    );

    
    if (!res.ok) {
        return {
            success: false,
            statusCode: res.status,
            message: "Failed to Delete single property",
            data: null
        };
    }

    const resultDelete = await res.json();
    return resultDelete

}