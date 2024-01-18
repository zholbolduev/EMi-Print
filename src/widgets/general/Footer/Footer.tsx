import "./Footer.scss";
import Logo from "@/entities/Logo/Logo";
import Link from "next/link";
import mail from "./icons/mail.svg";
import call from "./icons/call.svg";
import location from "./icons/location.svg";
import Image from "next/image";
import instagram from "./icons/instagram.svg";
import telegram from "./icons/telegram.svg";
import whatsapp from "./icons/whatsapp.svg";

const Footer = () => {
  const links = [
    { id: 1, page: "Главная", path: "" },
    { id: 2, page: "О нас", path: "" },
    { id: 3, page: "Полароиды", path: "" },
    { id: 4, page: "Готовые решения", path: "" },
    { id: 4, page: "Открытки", path: "" },
    { id: 4, page: "Дизайны", path: "" },
  ];

  const contacts = [
    { id: 1, contact: "example@gmail.com", icon: mail },
    { id: 2, contact: "0501101001", icon: call },
    { id: 3, contact: "ул. Московская 10", icon: location },
  ];

  const nets = [
    { id: 1, icon: instagram, path: "#" },
    { id: 2, icon: telegram, path: "#" },
    { id: 3, icon: whatsapp, path: "#" },
  ];

  return (
    <footer className="footer padding">
      <div className="footer__logo">
        <Logo />
        <h5>Студия печати</h5>
      </div>

      <div className="footer__links">
        <h5>Quick links</h5>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.path}>{link.page}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__contacts">
        <h5>Контакты</h5>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Image src={contact.icon} alt="Contact Icon" />
              <h6>{contact.contact}</h6>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__nets">
        <h5>Мы в соц. сетях</h5>
        <ul>
          {nets.map((net) => (
            <li key={net.id}>
              <button>
                <Image src={net.icon} alt="Net Icon" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
