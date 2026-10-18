"use server"


import { getToken } from "@/utility/getToken";
import { verifyTokenFunc } from "@/utility/jwt";
import { z } from "zod";

type RequestState = {
    success: boolean;
    errors?: {
        moveInDate?: string[];
        duration?: string[];
        message?: string[];
    };
};


const rentalRequestSchema = z.object({
    moveInDate: z.string().trim().min(1, "Move-in date is required"),
    message: z.string(),
    propertyId: z.string()
});

export const handleRequestDialog = async (prevState: RequestState, formData: FormData) => {


    const data = {
        moveInDate: formData.get("moveInDate"),
        message: formData.get("message"),
        propertyId: formData.get("propertyId"),
    };

    const validData = rentalRequestSchema.safeParse(data);
    if (!validData.success) {
        return {
            error: validData.error.flatten().fieldErrors,
            success: false,
        };
    }

    const { moveInDate, message, propertyId } = validData.data;

    const { accessToken } = await getToken();
    const decodedToken = verifyTokenFunc(accessToken as string, "access");
    const tenantId = decodedToken.data?.id;


    const payload = { tenantId, propertyId, moveInDate, message }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
        method: "POST",
        headers: {
            cookie: `accessToken=${accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    const result = await res.json()



    return result
}