import Image from "next/image";
import "./Header.scss";
import _1 from "./assets/1.jpg";
import _2 from "./assets/2.jpg";

const Header = () => {
  const imgs = [
    { id: 1, img: _1 },
    { id: 2, img: _2 },
  ];
  return (
    <header className="header">
      <div className="header__text">
        <h1>Запечатли свою историю!</h1>
        <p>Лови момент с нашими полароидами. Отметь свою историю!</p>

        <button className="btn-dark">Заказать</button>
      </div>
      <div className="header__imgs">
        {imgs.map((img) => (
          <div
            className="header__imgs-item"
            id={`header-img${img.id}`}
            key={img.id}
          >
            <Image
              src={img.img}
              alt="Header Picture"
              key={img.id}
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
