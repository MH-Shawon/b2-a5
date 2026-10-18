import { getToken } from "@/utility/getToken";





export const getAllUsersByAdmin = async () => {
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
        `${process.env.BACKEND_API_URL}/api/admin/users`,
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
            message: "Failed to fetch all users ",
            data: [],
        };
    }

    const result = await res.json()
    return result.data;
}