import {
    Building2,
    CalendarDays,
    CreditCard,
    LayoutDashboard,
    Tags,
    User,
    Users,
} from "lucide-react";

export type DashboardRole = "TENANT" | "LANDLORD" | "ADMIN";

export const dashboardMenus = {
  
    TENANT: [
        {
            title: "Overview",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "My Requests",
            href: "/dashboard/rental-requests",
            icon: CalendarDays,
        },
        {
            title: "Payments",
            href: "/dashboard/payments",
            icon: CreditCard,
        },
        {
            title: "Profile",
            href: "/dashboard/profile",
            icon: User,
        },
    ],

 
    LANDLORD: [
        {
            title: "Overview",
            href: "/landlord-dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "My Properties",
            href: "/landlord-dashboard/my-properties",
            icon: Building2,
        },
        {
            title: "Incoming Request",
            href: "/landlord-dashboard/incoming-request",
            icon: CalendarDays,
        },
        {
            title: "Profile",
            href: "/landlord-dashboard/profile",
            icon: User,
        },
    ],

    
    ADMIN: [
        {
            title: "Overview",
            href: "/admin-dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Users",
            href: "/admin-dashboard/users",
            icon: Users,
        },
        {
            title: "Properties",
            href: "/admin-dashboard/properties",
            icon: Building2,
        },
        {
            title: "Rental Requests",
            href: "/admin-dashboard/rental-requests",
            icon: CalendarDays,
        },
        {
            title: "Categories",
            href: "/admin-dashboard/categories",
            icon: Tags,
        },
        {
            title: "Profile",
            href: "/admin-dashboard/profile",
            icon: User,
        },
    ],
} satisfies Record<
    DashboardRole,
    {
        title: string;
        href: string;
        icon: React.ElementType;
    }[]
>;