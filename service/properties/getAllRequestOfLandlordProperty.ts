"use server"

import { getToken } from "@/utility/getToken";


export const getAllRequestOfLandlordProperty = async() => {
 const { accessToken } = await getToken()

    if (!accessToken) {
        return {
            success: false,
            statusCode: 401,
            message: "User is not logged in",
            data: [],
        };
    }

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/landlord/requests`,
        {
            method: "GET",
            headers: {
                cookie: `accessToken=${accessToken}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );

    if (!res.ok) {
        return {
            success: false,
            statusCode: res.status,
            message: "Failed to fetch request of landlord properties",
            data: [],
        };
    }

    const result = res.json()
    return result;
}