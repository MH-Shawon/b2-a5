"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";

type RegisterActionState = {
    name: string;
    email: string;
    password: string;
    phone?: string;
    role: string;
}

export const registerAction = async (prevState: RegisterActionState, formData: FormData) => {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const phone = String(formData.get("phone") ?? "").trim();
    const role = String(formData.get("role") ?? "").trim().toUpperCase();

    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password, phone, role })
        });

        const result = await res.json();

        if (!result?.success) {
            return result;
        }

        const loginRes = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const loginResult = await loginRes.json();

        if (!loginResult?.success) {
            return loginResult;
        }

        const cookieStore = await cookies();
        const isSecure = process.env.NODE_ENV === "production";

        cookieStore.set("accessToken", loginResult.data?.accessToken || "", {
            httpOnly: true,
            secure: isSecure,
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24,
        });
        cookieStore.set("refreshToken", loginResult.data?.refreshToken || "", {
            httpOnly: true,
            secure: isSecure,
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        const decodedToken = jwt.decode(loginResult.data?.accessToken) as JwtPayload;
        const userRole = decodedToken?.role;

        if (userRole === "ADMIN") {
            redirect("/admin-dashboard");
        }
        if (userRole === "LANDLORD") {
            redirect("/landlord-dashboard");
        }
        redirect("/dashboard");
    } catch (error) {
        if (
            typeof error === "object" &&
            error !== null &&
            "digest" in error &&
            typeof (error as { digest?: string }).digest === "string" &&
            (error as { digest: string }).digest.startsWith("NEXT_REDIRECT")
        ) {
            throw error;
        }

        return {
            success: false,
            message: "Something went wrong while creating your account.",
            errorDetails: error instanceof Error ? [error.message] : ["Unknown error"]
        };
    }
}