import { getMe } from "@/service/getMe";
import AdminWelcome from "./_components/admin-welcome";
import RecentProperties from "./_components/recent-properties";
import RecentUsers from "./_components/recent-users";
import AdminStats from "./_components/admin-stats";
import RentalOverview from "./_components/rental-overview";
import QuickActions from "./_components/quick-actions";
import { getAllPropertyByAdmin } from "@/service/admin/getAllPropertiesByAdmin";
import { getAllUsersByAdmin } from "@/service/admin/getAllUsersByAdmin";
import { getAllRentalRequestByAdmin } from "@/service/admin/getAllRentalRequestByAdmin";
import { RentalRequest } from "@/lib/rentalsTypes";
import { IProperty, UserData } from "@/lib/AdminType";
import { TUser } from "@/lib/type";


export default async function AdminDashboardPage() {
    const user = await getMe();
    const userName = user.data?.name || "Admin";


    const properties = await getAllPropertyByAdmin();
    const users = await getAllUsersByAdmin();
    const requests = await getAllRentalRequestByAdmin();

    const totalProperties = properties.length;
    const totalUsers = users.length;
    const totalRequests = requests.length;
    const activeCount = requests.filter(
        (request: RentalRequest) => request.status === "ACTIVE"
    ).length;

    const pendingCount = requests.filter(
        (request: RentalRequest) => request.status === "PENDING"
    ).length;

    const approvedCount = requests.filter(
        (request: RentalRequest) => request.status === "APPROVED"
    ).length;

    const rejectedCount = requests.filter(
        (request: RentalRequest) => request.status === "REJECTED"
    ).length;

    const completedCount = requests.filter(
        (request: RentalRequest) => request.status === "COMPLETED"
    ).length;



    const recentPropertyData = properties
        .filter((property: IProperty) => property.landlord?.role === "LANDLORD")
        .map((property: IProperty) => ({
            title: property.title,
            price: property.price,
            location: property.location,
            status: property.landlord.status,
            landlordName: property.landlord.name,
            role: property.landlord.role,
        }));




    const userData = users.map((user: UserData) => ({
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
    }));

    return (
        <div className="space-y-6">
            <AdminWelcome userName={userName} />

            <AdminStats activeCount={activeCount} totalProperties={totalProperties} totalUsers={totalUsers} totalRequests={totalRequests} />

            <RentalOverview rejectedCount={rejectedCount} approvedCount={approvedCount} completedCount={completedCount} pendingCount={pendingCount} />


            <section className="grid gap-6 xl:grid-cols-2">
                <RecentProperties propertyData={recentPropertyData} />
                <RecentUsers recentUsers={userData} />
            </section>

            <QuickActions />
        </div>
    );
}