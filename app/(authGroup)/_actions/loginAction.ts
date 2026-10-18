"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";



type LoginActionState = {
    success: boolean;
    statusCode: number;
    message: string;
    data: { accessToken: string, refreshToken: string } | null;
}



export const loginAction = async (prevState: LoginActionState, formData: FormData) => {

    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const result = await res.json();

    if (result.success) {
        const cookieStore = await cookies();
        cookieStore.set("accessToken", result.data?.accessToken || "", {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path:"/",
            maxAge: 60 * 60 * 24, // 1 days
        });
        cookieStore.set("refreshToken", result.data?.refreshToken || "", {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path:"/",
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });



        const decodeToken = jwt.decode(result.data?.accessToken) as JwtPayload
        // redirect to dashboard base on User Role
        if (decodeToken.role === "ADMIN") {
            redirect("/admin-dashboard")
        } else if (decodeToken.role === "LANDLORD") {
            redirect("/landlord-dashboard")
        }
        else if (decodeToken.role === "TENANT") {
            redirect("/dashboard")
        }


        

    };
    return result;
}