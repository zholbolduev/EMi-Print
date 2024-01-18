import "./WhyChooseUs.scss";
import creative from "./icons/creative-icon.svg";
import quality from "./icons/quality-icon.svg";
import attention from "./icons/attention-icon.svg";
import Image from "next/image";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Творческий Подход",
      description:
        "Наша команда воплощает вашу уникальность через творческие дизайны, создавая продукты, которые станут неповторимым выражением вашей индивидуальности.",
      icon: creative,
    },
    {
      id: 2,
      title: "Высокое Качество",
      description:
        "EMi Print гарантирует высший стандарт качества. Мы используем только лучшие материалы, чтобы каждый полароид, карточка или готовое решение радовали вас красочностью и надежностью.",
      icon: quality,
    },
    {
      id: 3,
      title: "Индивидуальное Внимание",
      description:
        "Ваш опыт важен для нас. Мы обеспечиваем индивидуальный подход к каждому клиенту, превращая ваши идеи в уникальные продукты, которые превзойдут ваши ожидания.",
      icon: attention,
    },
  ];
  return (
    <div className="why-choouse-us">
      <h3>Почему мы</h3>
      <ul className="why-choouse-us__list">
        {reasons.map((reason) => (
          <li className="why-choouse-us__item" key={reason.id}>
            <div className="why-choouse-us__item-icon">
              <Image src={reason.icon} alt="Reason Icon" />
            </div>

            <div className="why-choouse-us__item-text">
              <h4>{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;
