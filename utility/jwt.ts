import jwt from "jsonwebtoken";

export interface AuthPayload  {
    id: string;
    email: string;
    role: "TENANT" | "LANDLORD" | "ADMIN";
}


export const verifyTokenFunc = (token: string, secret: "access" | "refresh") => {
    const secretData = secret === "access" ? process.env.JWT_ACCESS_SECRET : process.env.JWT_REFRESH_SECRET

    try {
        const validToken = jwt.verify(token, secretData as string)  as AuthPayload;
        return { success: true, data: validToken  }
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error)
        return { success: false, error: message }
    }
}



