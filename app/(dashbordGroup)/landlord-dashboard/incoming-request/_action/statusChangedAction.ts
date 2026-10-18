"use server"

import { getToken } from "@/utility/getToken";

interface StatusChangeState {
    success: boolean;
    message: string;
}

export const statusChangedAction = async (prevState: StatusChangeState, formData: FormData) => {



    const status = formData.get("chagedStatus") as string;
    const id = formData.get("requestId") as string;

    const { accessToken } = await getToken()

    if (!accessToken) {
        return {
            success: false,
            statusCode: 401,
            message: "User is not logged in",
            data: [],
        };
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/landlord/requests/${id}`, {

        method: "PATCH",
        headers: {
            cookie: `accessToken=${accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ status, id })
    });


    const result = await res.json()

    return result
};