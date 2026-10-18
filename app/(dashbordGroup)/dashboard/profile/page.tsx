import { getMe } from "@/service/getMe";
import AccountInfo from "../_components/profile/account-info";
import PersonalInfo from "../_components/profile/personal-info";
import ProfileHeader from "../_components/profile/profile-header";




export default async function ProfilePage() {

    const profile = (await getMe()).data




    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Profile
                </h1>

                <p className="text-sm text-muted-foreground">
                    Manage your personal information and account details.
                </p>
            </div>

            {/* Profile Header */}
            <ProfileHeader
                name={profile.name}
                email={profile.email}
                role={profile.role}
                status={profile.status}
                createdAt={profile.createdAt}
            />

            {/* Information Sections */}
            <div className="grid gap-6 lg:grid-cols-2">
                <PersonalInfo
                    name={profile.name}
                    email={profile.email}
                    phone={profile.phone}
                />

                <AccountInfo
                    role={profile.role}
                    status={profile.status}
                    createdAt={profile.createdAt}
                    updatedAt={profile.updatedAt}
                />
            </div>
        </div>
    );
}