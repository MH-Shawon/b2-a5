export interface IPayment {
  id: string;
  transactionId: string;
  rentalRequestId: string;
  tenantId: string;
  amount: string;
  method: string;
  provider: string;
  status: "COMPLETED" | "PENDING" | "FAILED";
  paidAt: string | null;
  createdAt: string;
  rentalRequest: {
    property: {
      id: string;
      title: string;
      price: string;
    };
  };
}

export interface PaymentTableProps {
  payments: IPayment[];
}


export type PaymentState = {
  success: boolean;
  statusCode: number;
  message: string;
  data: string;
};