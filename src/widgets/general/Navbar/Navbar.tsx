"use client";

import "./Navbar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import burger_menu from "../../../shared/icons/burger-menu-icon.svg";
import Image from "next/image";

const Navbar = () => {
  const pages = [
    { id: 1, page: "Главная", path: "/" },
    { id: 2, page: "Полароиды", path: "#" },
    { id: 3, page: "Админ", path: "/admin/picture" },
  ];
  const [navStyle, setNavStyle] = useState(false);

  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY <= 0) {
      setNavStyle(false);
    } else {
      setNavStyle(true);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return pathname?.slice(0, 6) !== "/admin" ? (
    <nav className={`nav ${navStyle ? "nav-scroll" : ""}`}>
      <Link href="/" className="nav__logo">
        <span>
          EM<span>i</span>
        </span>{" "}
        <span>Print</span>
      </Link>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <Link href={page.path}>{page.page}</Link>
          </li>
        ))}
      </ul>
      <div className="nav__auth-menu">
        <Link href="/sign-up" className="btn-dark">
          Регистрация
        </Link>
        <Link href="/sign-in" className="btn-dark-outline">
          Войти
        </Link>
      </div>
      <button className="nav__menu">
        <Image
          src={burger_menu}
          alt="Burger Menu Icon"
          width={24}
          height={24}
        />
      </button>
    </nav>
  ) : null;
};

export default Navbar;
