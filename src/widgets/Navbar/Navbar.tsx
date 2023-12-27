"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "./Navbar.scss";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [shouldHideNavbar, setShouldHideNavbar] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const hidePaths = ["/sign-in", "/sign-up", "/no-password"];

    if (hidePaths.includes(currentPath)) {
      setShouldHideNavbar(true);
    } else {
      setShouldHideNavbar(false);
    }
  }, []);

  if (shouldHideNavbar) {
    return null;
  }

  const pages = [
    { id: 1, page: "Главная", path: "/" },
    { id: 2, page: "Админ", path: "/admin/picture" },
  ];

  const pathname = usePathname();

  return pathname?.slice(0, 6) !== "/admin" ? (
    <nav className="navbar">
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <Link href={page.path}>{page.page}</Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};

export default Navbar;
