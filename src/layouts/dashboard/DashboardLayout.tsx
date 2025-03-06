import { SidebarProvider, SidebarTrigger } from "@/components/ui";
import config from "@/config";
import { LoginForm } from "@/features/auth";
import BreadcrumbDashboard from "@/features/dashboard/BreadcrumbDashboard";
import DashboardSidebar from "@/features/dashboard/DashboardSidebar";
import { cookies } from "next/headers";
import { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies();
  const isTokenAvailable = !!cookieStore.get(config.token_cookie_name)?.value;

  return (
    <>
      {isTokenAvailable ? (
        <>
          <SidebarProvider>
            <DashboardSidebar />
            <main className="w-full">
              <div className="flex gap-5 items-center p-3">
                <SidebarTrigger />
                <BreadcrumbDashboard />
              </div>
              {children}
            </main>
          </SidebarProvider>
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </>
  );
};

export default DashboardLayout;
