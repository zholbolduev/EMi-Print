import "./Services.scss";
import img from "./assets/img.jpg";
import cards from "./assets/cards.jpg";
import decision from "./assets/decision.jpg";
import design from "./assets/design.jpg";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Полароид-фотографии",
      description:
        "Зафиксируйте мгновения с EMi Print! Наши полароиды превратят ваши воспоминания в стильные, ностальгические шедевры. Оформите заказ прямо сейчас",
      img: img,
      path: "/",
    },
    {
      id: 2,
      title: "Карточки-открытки",
      description:
        "Передайте чувства с EMi Print! Наши карточки-открытки с уникальными дизайнами и рисунками подарят особенные моменты. Выбирайте и радуйте своих близких!",
      img: cards,
      path: "/",
    },
    {
      id: 3,
      title: "Готовые решения",
      description:
        "Стильно и готово к использованию с EMi Print! Наши готовые решения – фотоальбомы, шкатулки и многое другое. Создавайте уникальные моменты с легкостью!",
      img: decision,
      path: "/",
    },
    {
      id: 4,
      title: "Индивидуальный дизайн",
      description:
        "Уникальность в каждой детали с EMi Print! Наши творческие специалисты готовы воплотить ваши идеи в индивидуальные дизайны. Давайте создадим что-то неповторимое вместе!",
      img: design,
      path: "/",
    },
  ];
  return (
    <div className="services padding">
      <h3>Наши услуги</h3>
      <ul className="services__list">
        {services.map((service, index) => (
          <div
            className={`services__item${
              (index + 1) % 2 ? "_reversed" : ""
            }`}
            key={service.id}
          >
            <Image src={service.img} alt="Service Image" />
            <div
              className={`services__item${
                (index + 1) % 2 ? "_reversed" : ""
              }-text`}
            >
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <Link href={service.path} className="btn-dark">
                Перейти
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Services;
