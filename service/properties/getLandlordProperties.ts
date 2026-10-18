"use server"

import { getToken } from "@/utility/getToken";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getLandlordProperties = async () => {
   const { accessToken } = await getToken()

    if (!accessToken) {
        return {
            success: false,
            statusCode: 401,
            message: "User is not logged in",
            data: [],
        };
    }

    const decodedToken = jwt.decode(accessToken) as JwtPayload;
    const landlordId = decodedToken?.id as string | undefined;

    if (!landlordId) {
        return {
            success: false,
            statusCode: 401,
            message: "Invalid session",
            data: [],
        };
    }

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/properties?landlordId=${landlordId}`,
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
            message: "Failed to fetch landlord properties",
            data: [],
        };
    }

    const result = await res.json();

    return {
        success: true,
        statusCode: res.status,
        message: "Properties fetched successfully",
        data: Array.isArray(result?.data) ? result.data : [],
    };
}