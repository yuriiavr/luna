import { useContext, useState } from "react";
import { Header } from "../../components/Header/Header";
import { ThemeContext } from "../../App";
import css from "./UserHomePage.module.css";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../api/AdditionalApi";
import { useDispatch } from "react-redux";

export const UserHomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  if (!theme) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#0E141C";
  } else {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
  }

  const [queue, setQueue] = useState();
  const [line, setLine] = useState();
  const [server, setServer] = useState();
  const [rank, setRank] = useState();
  const [ign, setIgn] = useState();


  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(
        `${BaseUrl}/api/findmates/`,
        {
          queue,
          line,
          server,
          rank,
          ign,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(() => navigate("/findteammates", { replace: true }))
      .catch(() => showError());
  };

  const successWindow = document.getElementById("success-window");
  const closeSuccess = () => {
    successWindow.style.display = "none";
  };

  const errorWindow = document.getElementById("error-window");
  const closeError = () => {
    errorWindow.style.display = "none";
  };
  const showError = () => {
    errorWindow.style.display = "flex";
  };

  return (
    <>
      <Header />

      <div
        id="success-window"
        style={{ display: "none" }}
        className={css.success_message}
      >
        <button onClick={closeSuccess} className={css.close_button}>
          &#x279C;
        </button>
        <span>Оголошення успішно опубліковано</span>
      </div>

      <div
        id="error-window"
        style={{ display: "none" }}
        className={css.error_message}
      >
        <button onClick={closeError} className={css.close_button}>
          &#x279C;
        </button>
        <span onClick={closeError}>
          Нажаль ви не можете залишати більше одного оголошення
        </span>
      </div>

      <div
        className={css.cont}
        style={{ background: theme ? "#fff" : "#0E141C" }}
      >
        <div style={{ display: "flex" }}>
          <h1
            style={{
              padding: "0",
              margin: "0",
              marginBottom: "30px",
              color: theme ? "#111" : "#fff",
            }}
          >
            Вітаємо, {user.userName}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className={css.playerCont}>
          <label className={css.selectCont}>
            <span style={{ color: theme ? "#111" : "#fff" }}>
              Оберіть чергу
            </span>
            <select
              style={{
                color: theme ? "#111" : "#fff",
                border: theme ? "1px solid #000" : "1px solid #fff",
              }}
              className={css.select}
              name="queue"
              onChange={(e) => setQueue(e.target.value)}
              required
              defaultValue=""
            >
              <option disabled value="">
                Черга
              </option>
              <option value="Ranked Solo/Duo">Ranked Solo/Duo</option>
              <option value="Ranked Flex">Ranked Flex</option>
              <option value="Normal">Normal</option>
              <option value="ARAM">ARAM</option>
              <option value="Тимчасовий режим">Тимчасовий режим</option>
            </select>
          </label>

          <label className={css.selectCont}>
            <span style={{ color: theme ? "#111" : "#fff" }}>
              Оберіть вашу лінію
            </span>
            <select
              style={{
                color: theme ? "#111" : "#fff",
                border: theme ? "1px solid #000" : "1px solid #fff",
              }}
              className={css.select}
              name="line"
              onChange={(e) => setLine(e.target.value)}
              required
              defaultValue=""
            >
              <option disabled value="">
                Лінія
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141110/lanes/top.png">
                Топ
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141109/lanes/jungle.png">
                Ліс
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141109/lanes/middle.png">
                Мід
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141109/lanes/adc.png">
                Адк
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141109/lanes/support.png">
                Сапорт
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713204377/lanes/allrole.png">
                Будь-яка лінія
              </option>
            </select>
          </label>

          <label className={css.selectCont}>
            <span style={{ color: theme ? "#111" : "#fff" }}>
              Оберіть ваш сервер
            </span>
            <select
              style={{
                color: theme ? "#111" : "#fff",
                border: theme ? "1px solid #000" : "1px solid #fff",
              }}
              className={css.select}
              name="server"
              onChange={(e) => setServer(e.target.value)}
              required
              defaultValue=""
            >
              <option disabled value="">
                Сервер
              </option>
              <option value="EUW">EUW</option>
              <option value="EUNE">EUNE</option>
            </select>
          </label>

          <label className={css.selectCont}>
            <span style={{ color: theme ? "#111" : "#fff" }}>
              Оберіть ваш ранг
            </span>
            <select
              style={{
                color: theme ? "#111" : "#fff",
                border: theme ? "1px solid #000" : "1px solid #fff",
              }}
              className={css.select}
              name="rank"
              onChange={(e) => setRank(e.target.value)}
              required
              defaultValue=""
            >
              <option disabled value="">
                Ранг
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141578/ranks/iron.webp">
                Залізо
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141578/ranks/bronze.webp">
                Бронза
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141578/ranks/silver.webp">
                Срібло
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141579/ranks/gold.webp">
                Золото
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141579/ranks/platinum.webp">
                Платина
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141753/ranks/emerald.webp">
                Смарагд
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141579/ranks/diamond.webp">
                Діамант
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141580/ranks/master.webp">
                Майстер
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141577/ranks/grandmaster.webp">
                Грандмайстер
              </option>
              <option value="https://res.cloudinary.com/dfasgvfex/image/upload/v1713141577/ranks/challenger.webp">
                Челленджер
              </option>
            </select>
          </label>

          <label className={css.selectCont}>
            <span style={{ color: theme ? "#111" : "#fff" }}>
              Введіть ваш ігровий нікнейм разом з Riot ID
            </span>
            <input
              style={{
                color: theme ? "#111" : "#fff",
                border: theme ? "1px solid #000" : "1px solid #fff",
              }}
              className={css.select}
              type="text"
              name="ign"
              placeholder="Faker#UKR"
              onChange={(e) => setIgn(e.target.value)}
              required
            />
          </label>

          <button className={css.searchButton} type="submit">
            Розпочати пошук
          </button>
        </form>
        <div>
          <Link
            style={{
              color: theme ? "#111" : "#fff",
              textDecoration: "underline",
            }}
            to={"/findteammates"}
          >
            Переглянути список шукачів
          </Link>
        </div>
      </div>

      <footer className={css.footer}>
        <div className={css.social_cont}>
          <a href="https://t.me/ukrainian_lol">
            <span className={css.social_link}>
              <img
                width={20}
                src={require("../../images/tg.png")}
                alt="telegram"
              />{" "}
              t.me/ukrainian_lol
            </span>
          </a>
          <a className={css.social_link} href="mailto:ukarainian.lol@ukr.net">
            <img width={20} src={require("../../images/mail.png")} alt="mail" />{" "}
            ukarainian.lol@ukr.net
          </a>
        </div>
      </footer>
    </>
  );
};
