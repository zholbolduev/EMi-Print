"use client";

import Link from "next/link";
import "./AdminDashboard.scss";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState<string>("");
  const pages = [
    { id: 2, page: "Фотографии", path: "/admin/picture" },
    {
      id: 3,
      page: "Готовые Решения",
      path: "/admin/ready-solutions",
    },
    { id: 4, page: "Открытки", path: "/admin/gift-card" },
    { id: 5, page: "Прочие", path: "/admin/other" },
  ];

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  return (
    <div className="admin-dashboard">
      <ul className="admin-dashboard__pages">
        {pages.map((page) => (
          <li
            onClick={() => setActivePage(page.path)}
            className={`admin-dashboard__item${
              activePage === page.path ? "_active" : ""
            }`}
            key={page.id}
          >
            <Link href={page.path}>{page.page}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
