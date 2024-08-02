import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import css from "../LogIn/LogIn.module.css";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import useAnalyticsEventTracker from "../../googleAnalytics/useAnalyticsEventTracker";
import { useDispatch } from "react-redux";
import { fetchCurrentUser, loginUser } from "../../redux/auth/operations";

export default function LogIn() {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const { currentTarget: formRef } = event;
    const { email, password } = formRef.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    dispatch(loginUser(credentials))
      .unwrap()
      .then(
        () => navigate("/userhomepage", { replace: true }),
        fetchCurrentUser()
      )
      .catch(() => showError());
  };

  const gaEventTracker = useAnalyticsEventTracker("Contact us");

  if (!theme) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#0E141C";
  } else {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
  }

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
        id="error-window"
        style={{ display: "none" }}
        className={css.error_message}
      >
        <button onClick={closeError} className={css.close_button}>
          &#x279C;
        </button>
        <span onClick={closeError}>Не правильна пошта або пароль</span>
      </div>

      <div
        style={{
          background: theme ? "#fff" : "#0E141C",
          padding: "60px 15px",
          paddingBottom: "2.5rem",
        }}
      >
        <h1
          style={{ color: theme ? "#000" : "#fff" }}
          className={css.singin_heading}
        >
          Увійти в аккаунт
        </h1>

        <form
          className={css.form}
          style={{
            display: "flex",
            flexDirection: "column",
            color: theme ? "#000" : "#fff",
          }}
          onSubmit={handleSubmit}
        >
          <label className={css.label}>
            <span style={{ color: theme ? "#000" : "#fff" }}>Пошта</span>
            <input
              style={{ border: theme ? "1px solid #000" : "1px solid #fff" }}
              className={css.input}
              name="email"
              type="mail"
              required
            />
          </label>
          <label className={css.label}>
            <span style={{ color: theme ? "#000" : "#fff" }}>Пароль</span>
            <input
              className={css.input}
              autoComplete="on"
              name="password"
              type="password"
              required
            />
          </label>
          <button className={css.reg_btn} type="submit">
            Увійти
          </button>
          <span style={{ margin: "0 auto" }}>
            Немаєте аккаунту?{" "}
            <Link className={css.link} to={"/signup"}>
              Зарєструватись
            </Link>
          </span>
        </form>
      </div>
      <footer className={css.footer}>
        <div className={css.social_cont}>
          <a
            onClick={() => gaEventTracker("tg")}
            href="https://t.me/ukrainian_lol"
          >
            <span className={css.social_link}>
              <img
                width={20}
                src={require("../../images/tg.png")}
                alt="telegram"
              />{" "}
              t.me/ukrainian_lol
            </span>
          </a>
          <a
            onClick={() => gaEventTracker("email")}
            className={css.social_link}
            href="mailto:ukarainian.lol@ukr.net"
          >
            <img width={20} src={require("../../images/mail.png")} alt="mail" />{" "}
            ukarainian.lol@ukr.net
          </a>
        </div>
      </footer>
    </>
  );
}
