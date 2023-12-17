import Link from "next/link";
import "./Navbar.scss";

const Navbar = () => {
  const pages = [
    { id: 1, page: "Главная", path: "/" },
    { id: 2, page: "Регистрация", path: "/sign-up" },
    { id: 3, page: "Админ", path: "/admin/picture" },
  ];
  return (
    <nav className="navbar">
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <Link href={page.path}>{page.page}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
