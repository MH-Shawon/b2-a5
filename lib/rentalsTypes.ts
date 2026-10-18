export interface RentalRequest {
    id: string;
    tenantId: string;
    propertyId: string;
    status: RentalRequestStatus;
    moveInDate: string;
    message: string;
    createdAt: string;
    updatedAt: string;
    tenant?: User;
    property?: {
        title: string;
        location: string;
        price: string;
    };
}

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    phone: string;
    status: string;
    createdAt: string;
    updatedAt: string;
};

export interface RentalResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data: RentalRequest[];
}

export interface RentalResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data: RentalRequest[];
}

export interface RequestStatsProps {
    rentals: RentalRequest[];
}

export type RentalRequestStatus = | "PENDING" | "APPROVED" | "REJECTED" | "ACTIVE" | "COMPLETED";

export interface RequestToRentDialogProps {
    propertyId: string;
    isAuthenticated: boolean;
}


export interface IRequestOfLandlordProperty {
    id: string;
    tenantId: string;
    propertyId: string;
    status: RentalRequestStatus;
    moveInDate: string;
    message: string;
    createdAt: string;
    updatedAt: string;
    property: {
        title: string;
        price: string;
        location: string;
    };
    tenant: {
        name: string;
        role: "TENANT";
        status: "ACTIVE" | "INACTIVE" | "BANNED";
    };
}