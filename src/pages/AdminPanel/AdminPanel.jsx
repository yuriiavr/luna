import { useContext, useState } from "react";
import { Header } from "../../components/Header/Header";
import { ThemeContext } from "../../App";
import css from "./AdminPanel.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../api/AdditionalApi";

export const AdminPanel = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  const [thumbSrc, setThumbSrc] = useState("");
  const [selectedRoute, setSelectedRoute] = useState("news");

  const [thumbSrcV, setThumbSrcV] = useState("");
  const [champion, setChampion] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  if (user?.role !== "admin" && user?.role !== "moderator") {
    navigate("/", { replace: true });
    return null;
  }

  // Зміна кольору фону
  if (!theme) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#0E141C";
  } else {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      title,
      sub,
      thumbSrc,
    };

    if (selectedRoute === "news") {
      postData.thumbSrcV = thumbSrcV;
    }

    if (selectedRoute === "lor") {
      postData.char = champion;
    }

    try {
      await axios.post(`${BaseUrl}/api/${selectedRoute}`, postData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setShowSuccessModal(true);
      setTitle("");
      setSub("");
      setThumbSrc("");
      setThumbSrcV("");
      setChampion("");
    } catch (error) {
      setShowErrorModal(true);
    }
  };

  return (
    <>
      <Header />

      {showSuccessModal && (
        <div id="success-window" className={css.success_message}>
          <button onClick={() => setShowSuccessModal(false)} className={css.close_button}>
            &#x279C;
          </button>
          <span>Публікація успішно створена!</span>
        </div>
      )}

      {showErrorModal && (
        <div id="error-window" className={css.error_message}>
          <button onClick={() => setShowErrorModal(false)} className={css.close_button}>
            &#x279C;
          </button>
          <span>
            На жаль, не вдалося створити публікацію. Перевірте дані.
          </span>
        </div>
      )}

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
            Панель адміністратора
          </h1>
        </div>
        <form onSubmit={handleSubmit} className={css.playerCont}>
          <label className={css.selectCont}>
            <span style={{ color: theme ? "#111" : "#fff" }}>
              Оберіть маршрут для публікації
            </span>
            <select
              style={{
                color: theme ? "#111" : "#fff",
                border: theme ? "1px solid #000" : "1px solid #fff",
              }}
              className={css.select}
              name="route"
              onChange={(e) => setSelectedRoute(e.target.value)}
              required
              defaultValue="news"
            >
              <option value="news">Новини</option>
              <option value="lor">Лор</option>
              <option value="cyber">Кіберспорт</option>
            </select>
          </label>

          <label className={css.selectCont}>
            <span style={{ color: theme ? "#111" : "#fff" }}>
              Заголовок
            </span>
            <input
              style={{
                color: theme ? "#111" : "#fff",
                border: theme ? "1px solid #000" : "1px solid #fff",
              }}
              className={css.select}
              type="text"
              name="title"
              placeholder="Заголовок публікації"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          <label className={css.selectCont}>
            <span style={{ color: theme ? "#111" : "#fff" }}>
              Підзаголовок / Короткий опис
            </span>
            <textarea
              style={{
                color: theme ? "#111" : "#fff",
                border: theme ? "1px solid #000" : "1px solid #fff",
                resize: "vertical",
              }}
              className={css.select}
              name="sub"
              placeholder="Короткий опис публікації"
              value={sub}
              onChange={(e) => setSub(e.target.value)}
              required
            />
          </label>

          <label className={css.selectCont}>
            <span style={{ color: theme ? "#111" : "#fff" }}>
              Посилання на зображення
            </span>
            <input
              style={{
                color: theme ? "#111" : "#fff",
                border: theme ? "1px solid #000" : "1px solid #fff",
              }}
              className={css.select}
              type="text"
              name="thumbSrc"
              placeholder="URL зображення"
              value={thumbSrc}
              onChange={(e) => setThumbSrc(e.target.value)}
              required
            />
          </label>
          
          {selectedRoute === "news" && (
            <label className={css.selectCont}>
              <span style={{ color: theme ? "#111" : "#fff" }}>
                Посилання на маленьке зображення
              </span>
              <input
                style={{
                  color: theme ? "#111" : "#fff",
                  border: theme ? "1px solid #000" : "1px solid #fff",
                }}
                className={css.select}
                type="text"
                name="thumbSrcV"
                placeholder="URL маленького зображення"
                value={thumbSrcV}
                onChange={(e) => setThumbSrcV(e.target.value)}
                required
              />
            </label>
          )}

          {selectedRoute === "lor" && (
            <label className={css.selectCont}>
              <span style={{ color: theme ? "#111" : "#fff" }}>Чемпіон</span>
              <input
                style={{
                  color: theme ? "#111" : "#fff",
                  border: theme ? "1px solid #000" : "1px solid #fff",
                }}
                className={css.select}
                type="text"
                name="champion"
                placeholder="Ім'я чемпіона"
                value={champion}
                onChange={(e) => setChampion(e.target.value)}
                required
              />
            </label>
          )}

          <button className={css.searchButton} type="submit">
            Створити публікацію
          </button>
        </form>
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