import { useContext } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import css from "./FindTeammates.module.css";
import { ThemeContext } from "../../App";
import { MatesList } from "./MatesList/MatesList";

export const FindTeammates = () => {

    const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />

      <div
        className={css.cont}
        style={{ background: theme ? "#fff" : "#0E141C" }}
      >
        <div className={css.bannerBox}>
          <div className={css.bannerContent}>
            <div className={css.bannerTitleBox}>
              <span>Тут ви можете знайти</span>
              <h1>Тіммейта</h1>
              <span>на одну або декілька ігор</span>
            </div>
            <img
              className={css.bannerImg}
              src={
                "https://res.cloudinary.com/dfasgvfex/image/upload/v1713204627/web-banners/findmates-banner.webp"
              }
              alt="About banner"
            />
          </div>
        </div>
      </div>
      <MatesList />

      <Footer />
    </>
  );
};
