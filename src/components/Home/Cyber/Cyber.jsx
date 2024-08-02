import { Link } from "react-router-dom";
import css from "./Cyber.module.css";
import { useEffect, useState } from "react";

const Cyber = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  });

  return (
    <div
      style={{
        backgroundImage: isMobile
          ? "linear-gradient(to right, #00000066, #00000066), url('https://res.cloudinary.com/dfasgvfex/image/upload/v1714241760/web-banners/cyberMobile.png')"
          : "linear-gradient(to right, #00000066, #00000066), url('https://res.cloudinary.com/dfasgvfex/image/upload/v1712075741/web-banners/cyber.jpg')",
        backgroundPosition: "center",
      }}
      className={css.cont}
    >
      <div className={css.titleCont}>
        <h3 className={css.title}>Граймо Разом!</h3>
        <span className={css.sub}>
          Знайти тіммейта стало легше разом з LUNA!
        </span>
        <div className={css.buttonCont}>
          <Link className={css.button} to={"/findteammates"}>
            Знайти
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cyber;
