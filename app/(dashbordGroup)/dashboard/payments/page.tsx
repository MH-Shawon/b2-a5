import {
    CircleCheck,
    Clock3,
    Wallet,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { IPayment } from "@/lib/paymentTypes";
import PaymentTable from "../_components/payment/payment-table";
import getOwnPayments from "@/service/payment/getOwnPayments";



export default async function TenantPaymentsPage() {

    const payme = await getOwnPayments()
    
    const payments: IPayment[] = payme.data


    const totalPaid = payments
        .filter((payment) => payment.status === "COMPLETED")
        .reduce(
            (total, payment) => total + Number(payment.amount),
            0
        );

    const pendingAmount = payments
        .filter((payment) => payment.status === "PENDING")
        .reduce(
            (total, payment) => total + Number(payment.amount),
            0
        );

    const completedCount = payments.filter(
        (payment) => payment.status === "COMPLETED"
    ).length;

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <p className="text-sm font-medium text-primary">
                    Tenant Dashboard
                </p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                    Payments
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Track your rental payments and transaction history.
                </p>
            </div>

            {/* Summary */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Paid
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                ৳{totalPaid.toLocaleString()}
                            </h2>
                        </div>

                        <div className="rounded-xl bg-primary/10 p-3">
                            <Wallet className="size-5 text-primary" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Pending Amount
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                ৳{pendingAmount.toLocaleString()}
                            </h2>
                        </div>

                        <div className="rounded-xl bg-yellow-100 p-3 dark:bg-yellow-950">
                            <Clock3 className="size-5 text-yellow-600 dark:text-yellow-400" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Completed Payments
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                {completedCount}
                            </h2>
                        </div>

                        <div className="rounded-xl bg-green-100 p-3 dark:bg-green-950">
                            <CircleCheck className="size-5 text-green-600 dark:text-green-400" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Payment History */}
            <PaymentTable payments={payments} />
        </div>
    );
}