"use server"

import { PaymentState } from "@/lib/paymentTypes";
import { getToken } from "@/utility/getToken";



export const createAPaymentAction = async (prevState: PaymentState, formData: FormData) => {
    const { accessToken } = await getToken()

    if (!accessToken) {
        return {
            success: false,
            statusCode: 401,
            message: "User is not logged in",
            data: [],
        };
    }



    const rentalRequestId = formData.get("requestId")



    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/payments/create`,
        {
            method: "POST",
            headers: {
                cookie: `accessToken=${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ rentalRequestId })
        }
    );


    const result = await res.json()


    if (!res.ok) {
        return {
            success: false,
            statusCode: res.status,
            message: "Failed to create payment",
            data: [],
        };
    }





    return result;
}