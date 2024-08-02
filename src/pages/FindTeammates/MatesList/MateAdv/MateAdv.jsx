import css from "./MateAdv.module.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../../App";
import { useAuth } from "../../../../hooks/useAuth";
import axios from "axios";
import { BaseUrl } from "../../../api/AdditionalApi";
import { useWindowSize } from "../../../../hooks/useWindowSize";

const MateAdv = ({ line, server, rank, queue, ign, _id, owner }) => {
  const { theme } = useContext(ThemeContext);

  const { user } = useAuth();

  const [style, setStyle] = useState(false);

  const handleDelAdv = async (event) => {
    event.preventDefault();
    setStyle(!style);

    await axios
      .delete(`${BaseUrl}/api/findmates/${_id}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [buttonSize, setButtonSize] = useState(null);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 1200) {
      changeBackGroundColorForMobile();
    }
    if (width >= 1200) {
      changeBackGroundColorForDesk();
    }
  }, [width]);

  const changeBackGroundColorForMobile = () => {
    setButtonSize("translateX(80%)");
  };

  const changeBackGroundColorForDesk = () => {
    setButtonSize("translateX(95%)");
  };

  return (
    <div
      className={css.card}
      style={{ border: theme ? "1px solid #000" : "1px solid #fff" }}
    >
      <div>
        <span
          className={css.queue}
          style={{ color: theme ? "#000" : "#fff" }}
          dangerouslySetInnerHTML={{ __html: queue }}
        ></span>
      </div>
      <div>
        <img
          style={{ maxWidth: "50px", paddingLeft: "5px" }}
          src={line}
          alt="line"
        />
      </div>
      <div>
        <span
          style={{ color: theme ? "#000" : "#fff" }}
          dangerouslySetInnerHTML={{ __html: server }}
        ></span>
      </div>
      <div>
        <img style={{ maxWidth: "70px" }} src={rank} alt="rank" />
      </div>
      <div>
        <span
          className={css.ign}
          style={{ color: theme ? "#000" : "#fff" }}
          dangerouslySetInnerHTML={{ __html: ign }}
        ></span>
      </div>
      <button
        disabled={style ? true : false}
        onClick={handleDelAdv}
        className={css.delButton}
        style={{
          display: user.id === owner ? "flex" : "none",
          transform: style ? "translateX(0%)" : buttonSize,
          justifyContent: style ? "center" : "start",
        }}
      >
        {style ? "Оголошення успішно видалено" : "X"}
      </button>
    </div>
  );
};

export default MateAdv;
