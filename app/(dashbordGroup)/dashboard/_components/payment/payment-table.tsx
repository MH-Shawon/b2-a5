"use client";

import {
  CalendarDays,
  CreditCard,
  ReceiptText,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IPayment } from "@/lib/paymentTypes";


interface PaymentTableProps {
  payments: IPayment[];
}

export default function PaymentTable({
  payments,
}: PaymentTableProps) {





  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2.5">
            <ReceiptText className="size-5 text-primary" />
          </div>

          <div>
            <CardTitle className="text-lg">
              Payment History
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              View your rental payment transactions.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {payments.length === 0 ? (
          <EmptyPayment />
        ) : (
          <div className="space-y-4">
            {payments.map((payment) => (
              <PaymentCard
                key={payment.id}
                payment={payment}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function PaymentCard({
  payment,
}: {
  payment: IPayment;
}) {
  const property = payment.rentalRequest.property;

  return (
    <div className="rounded-xl border bg-background p-4 transition-colors hover:bg-muted/30 sm:p-5">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Property Information */}
        <div className="flex min-w-0 items-start gap-4">
          <div className="hidden rounded-lg bg-muted p-3 sm:block">
            <CreditCard className="size-5 text-muted-foreground" />
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-semibold">
              {property.title}
            </h3>

            <p className="mt-1 text-xs text-muted-foreground">
              Transaction ID
            </p>

            <p className="max-w-52  font-mono text-xs overflow-auto">
              {payment.transactionId}
            </p>

          </div>
        </div>

        {/* Payment Details */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4 ">
          <PaymentInfo
            label="Amount"
            value={`৳${Number(payment?.amount)?.toLocaleString()}`}
          />

          <PaymentInfo
            label="Method"
            value={payment?.method?.toUpperCase() || "None"}
          />

          <PaymentInfo
            label="Provider"
            value={payment?.provider || "None"}
          />

          <div>
            <p className="text-xs text-muted-foreground">
              Status
            </p>

            <div className="mt-1">
              <PaymentStatus status={payment?.status} />
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground lg:min-w-32.5">
          <CalendarDays className="size-4 shrink-0" />

          <div>
            <p className="text-xs">
              Paid on
            </p>

            <p className="font-medium text-foreground">
              {formatDate(payment?.paidAt)}
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}

function PaymentInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 truncate text-sm font-medium">
        {value}
      </p>
    </div>
  );
}

function PaymentStatus({
  status,
}: {
  status: IPayment["status"];
}) {
  if (status === "COMPLETED") {
    return (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-950 dark:text-green-400">
        Completed
      </Badge>
    );
  }

  if (status === "PENDING") {
    return (
      <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 dark:bg-yellow-950 dark:text-yellow-400">
        Pending
      </Badge>
    );
  }

  return (
    <Badge variant="destructive">
      Failed
    </Badge>
  );
}

function formatDate(date: string | null) {
  if (!date) return "N/A";

  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function EmptyPayment() {
  return (
    <div className="flex min-h-62.5 flex-col items-center justify-center text-center">
      <div className="rounded-full bg-muted p-4">
        <CreditCard className="size-7 text-muted-foreground" />
      </div>

      <h3 className="mt-4 font-semibold">
        No payment history
      </h3>

      <p className="mt-1 max-w-sm text-sm text-muted-foreground">
        Your completed rental payments will appear here.
      </p>
    </div>
  );
}