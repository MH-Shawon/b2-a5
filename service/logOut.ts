"use server"

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export const LoggOut = async () => {

    const cookieStore = await cookies();
    cookieStore.delete("accessToken")
    cookieStore.delete("refreshToken")

    revalidateTag("my-user","max")
    redirect("/login","replace")
}