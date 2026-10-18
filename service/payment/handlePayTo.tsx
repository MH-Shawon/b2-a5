"use client";

import { useActionState, useEffect } from "react";

import { createAPaymentAction } from "./createAPayment";
import { PaymentState } from "@/lib/paymentTypes";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function HandlePayTo({ rentalId }: { rentalId: string; }) {
    const initialState: PaymentState = {
        success: false,
        statusCode: 0,
        message: "",
        data: "",
    };

    const [state, handlePayTo, isPending] = useActionState(
        createAPaymentAction,
        initialState
    );




    const router = useRouter()


    useEffect(() => {
        if (!state.message) return
        if (state.success && state.data) {
            toast.success(state.message);
            router.push(state.data)
        } else {
            toast.error(state.message);
        }

    }, [state, router]);




    return (
        <form action={handlePayTo}>
            <input
                type="hidden"
                name="requestId"
                value={rentalId}
            />

            <Button
                type="submit"
                disabled={isPending}
            >
                {isPending ? "Redirecting..." : "TO PAY"}
            </Button>
        </form>
    );
}