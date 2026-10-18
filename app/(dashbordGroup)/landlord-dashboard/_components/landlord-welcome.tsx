


import Link from "next/link";


interface LandlordWelcomeProps {
    userName: string;
}

export default async function LandlordWelcome({
    userName,
}: LandlordWelcomeProps) {

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="text-sm text-muted-foreground">
                    Landlord Dashboard
                </p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                    Welcome back, {userName} 👋
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Manage your properties and keep track of your
                    rental activity.
                </p>
            </div>

            <Link href="/landlord-dashboard">
                abc
            </Link>
        </div>
    );
}