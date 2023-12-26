"use client";

import { useRouter } from "next/router";
import "./Navbar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pages = [
    { id: 1, page: "Главная", path: "/" },
    { id: 2, page: "Регистрация", path: "/sign-up" },
    { id: 3, page: "Админ", path: "/admin/picture" },
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
