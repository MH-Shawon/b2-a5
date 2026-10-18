export interface IProperty {
    id: string;
    title: string;
    price: string;
    location: string;
    landlordId: string;
    landlord: {
        name: string;
        role: string;
        status: string;
    };
}


export interface AdminStatsProps {
    activeCount: number;
    totalProperties: number;
    totalUsers: number;
    totalRequests: number;
}

export interface RentalRequestStatsProps {
    pendingCount: number;
    approvedCount: number;
    rejectedCount: number;
    completedCount: number;
}


export interface PropertyData {
    title: string;
    price: string;
    location: string;
    status: string;
    landlordName: string;
    role: string;
}

export interface PropertyComponentProps {
    propertyData: PropertyData[]
}

export interface UserData {
    name: string;
    email: string;
    role: string;
    status: string;
}
export interface UserDataProps {
    recentUsers: UserData[]
}

export type UserStatus = "ACTIVE"|"BANNED"


export interface User {
    id: string;
    name: string;
    email: string;
    role: "TENANT" | "LANDLORD" | "ADMIN";
    phone: string;
    status: "ACTIVE" | "INACTIVE";
    createdAt: string;
    updatedAt: string;
}

export interface UsersTableProps {
    users: User[];
}

export interface CategoryCreateState {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
  } | null;
}