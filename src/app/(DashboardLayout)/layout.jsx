"use client";

import DashboardSidebar from "@/Components/Apps/Dashboard/DashboardSidebar/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-[#080c16]">
      <DashboardSidebar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
