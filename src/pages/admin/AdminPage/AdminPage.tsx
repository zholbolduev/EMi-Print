import AdminDashboard from "@/widgets/admin/AdminDashboard/AdminDashboard";
import React, { ReactNode } from "react";
import "./AdminPage.scss";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="admin-layout">
      <AdminDashboard />
      <div className="admin-layout_right">{children}</div>
    </div>
  );
};

export default AdminLayout;
