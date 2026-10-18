"use server";

import { UserStatus } from "@/lib/AdminType";
import { getToken } from "@/utility/getToken";

export const updateUserStatus = async (id: string, status: UserStatus) => {
    const { accessToken } = await getToken();

    if (!accessToken) {
        return {
            success: false,
            message: "Unauthorized",
        };
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/users/${id}`,
        {
            method: "PATCH",
            headers: {
                cookie: `accessToken=${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        }
    );

    const result = await res.json();

    return result;
};