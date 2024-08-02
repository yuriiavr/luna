import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import css from "./HeaderNav.module.css";
import { ThemeContext } from "../../../App";
import { useAuth } from "../../../hooks/useAuth";
import profileIcon from "../../../images/profile-icon.png"
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/auth/operations";

export const HeaderNav = () => {

  const baseUrl = 'https://www.leagueoflegends.com.ua'

  const [open, setOpen] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  const body = document.getElementsByTagName("body")[0];

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser())
      .then((res) => console.log(res))
      .catch((error) => error);
  }

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChangePage = () => {
    if (window.innerWidth < 1200) {
      body.classList.toggle("menu-open");
    }
  };

  const handleChangeTheme = () => {
    setTheme(!theme);
  };

  let toggleThemeImg = require("../../../images/sun.png");

  if (theme === false) {
    toggleThemeImg = require("../../../images/moon.png");
  }

  const { isLoggedIn } = useAuth();

  return (
    <div className={css.navList}>
      <Link
        to={"/"}
        onClick={handleChangePage}
        className={
          window.location.href === `${baseUrl}/#`
            ? css.activeLink
            : css.link
        }
      >
        Головна
      </Link>
      <Link
        to={"/news"}
        onClick={handleChangePage}
        className={
          window.location.href === `${baseUrl}/#/news`
            ? css.activeLink
            : css.link
        }
      >
        Новини
      </Link>
      <button className={css.dropdown} onClick={handleOpen}>
        Додатково
        <img
          className={css.moreButton}
          style={{
            width: "15px",
            marginLeft: "5px",
            position: "absolute",
            top: "5px",
          }}
          src={require("../../../images/more.png")}
          alt="open menu"
        />
      </button>
      {open ? (
        <ul
          className={css.menu}
        >
          <li className={css.menuItem}>
            <Link
              onClick={handleChangePage}
              style={{
                color: "#fff",
                textDecoration: "none",
                display: "flex",
                width: "100%",
              }}
              to={"/cyber"}
            >
              Кіберспорт
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link
              onClick={handleChangePage}
              style={{
                color: "#fff",
                display: "flex",
                textDecoration: "none",
                width: "100%",
              }}
              to={"/lore"}
            >
              Лор
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link
              onClick={handleChangePage}
              style={{
                color: "#fff",
                display: "flex",
                textDecoration: "none",
                width: "100%",
              }}
              to={"/additionalinfo"}
            >
              Корисні статті
            </Link>
          </li>
        </ul>
      ) : null}
      <Link
        onClick={handleChangePage}
        to={"/faq"}
        className={
          window.location.href === `${baseUrl}/#/faq`
            ? css.activeLink
            : css.link
        }
      >
        Про нас
      </Link>
      {isLoggedIn ? (
        <button
          className={css.login}
          style={{ padding: "8px 10px", fontSize: "14px" }}
          onClick={handleLogout}
        >
          Вийти
        </button>
      ) : (
        <Link
          id="reg-button"
          onClick={handleChangePage}
          to={"/login"}
          className={css.login}
          style={
            window.location.href === `${baseUrl}/#/login` ||
            window.location.href === `${baseUrl}/#/signup` ||
            isLoggedIn
              ? { display: "none" }
              : { display: "flex" }
          }
        >
          Увійти
        </Link>
      )}

      <Link
        onClick={handleChangePage}
        to={"/userhomepage"}
        style={
          window.location.href === `${baseUrl}/#/login` ||
          window.location.href === `${baseUrl}/#/signup` ||
          !isLoggedIn
            ? { display: "none" }
            : { display: "flex" }
        }
      >
        <img
          className={css.profile_icon}
          src={profileIcon}
          alt="profile icon"
        />
      </Link>
      <div>
        <button onClick={handleChangeTheme} className={css.theme_toggle}>
          <img
            className={css.toggleImg}
            src={toggleThemeImg}
            alt="theme button"
          />
        </button>
      </div>
    </div>
  );
};
