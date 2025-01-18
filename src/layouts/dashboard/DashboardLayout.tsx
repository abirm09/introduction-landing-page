import { SidebarProvider, SidebarTrigger } from "@/components/ui";
import BreadcrumbDashboard from "@/features/dashboard/BreadcrumbDashboard";
import DashboardSidebar from "@/features/dashboard/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
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
  );
};

export default DashboardLayout;
