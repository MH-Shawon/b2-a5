import type { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import DashboardSidebar from "./_components/dashboard-sidebar";
import { getMe } from "@/service/getMe";
import { Home } from "lucide-react";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default async function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    const user = await getMe();

    return (
         <SidebarProvider>
            <DashboardSidebar user={user} />

            <div className="flex min-h-screen w-full flex-col">
                
                {/* Mobile Header */}
                <header className="flex h-16 items-center border-b px-4 md:hidden">
                    <SidebarTrigger />
                    
                    <h1 className="ml-3 font-semibold">
                       <span className="flex justify-items-center gap-2">
                                <Home className="size-6 text-primary " />
                                <span className="text-xl font-bold">
                                    Rent<span className="text-primary">Nest</span>
                                </span>
                            </span>
                    </h1>
                </header>

                {/* Desktop Header*/}
                <header className="hidden h-16 items-center border-b px-6 md:flex">
                    <h1 className="font-semibold">
                    </h1>
                </header>

                <main className="flex-1 p-4 md:p-6">
                    {children}
                </main>

            </div>
        </SidebarProvider>
    );
}