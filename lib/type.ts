

export type TUser = {
    success: boolean,
    statusCode: number,
    message: string,
    data: {
        id: string,
        name: string,
        email: string;
        role: string;
        phone: string;
        status: string;
        createdAt: string;
        updatedAt: string;
    }
}

export type NavbarProps = {
    user: TUser
};


export type IProperty = {
    id: string;
    title: string;
    description: string;
    price: string;
    location: string;
    city: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    amenities: string[];
    images: string[];
    rating?: number;
    availability: string;
    categoryId: string;
    landlordId: string;
    createdAt: string;
    updatedAt: string;

    category?: {
        id: string;
        name: string;
        createdAt: string;
    };

    landlord?: {
        id: string;
        name: string;
        email: string;
        phone: string | null;
    };
};


export interface StatsCardProps {
    title: string;
    value: string;
    description: string;
    icon: React.ElementType;
    href: string;
    highlight?: boolean;
}






export type IPropertiesCardProps = {
    properties: IProperty[];
};

 export interface PropertyCreateState {
    success: boolean;
    statusCode: number;
    message: string;
    data: IProperty | null;
    errors?: Record<string, string[]>;
}
