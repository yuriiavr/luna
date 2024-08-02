import { useContext, useEffect, useState } from "react";
import PostUrlAdvertisement from "../../api/AdvertisenmentApi";
import css from "./MatesList.module.css";
import { ThemeContext } from "../../../App";
import MateAdv from "./MateAdv/MateAdv";
import { Link } from "react-router-dom";

export const MatesList = () => {
  const [data, setData] = useState({
    advertisements: [],
  });

  const { theme } = useContext(ThemeContext); 

  if (!theme) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#0E141C";
  } else {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
  }

  useEffect(() => {
    fetch(PostUrlAdvertisement)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  const handleUpdatePage = () => {
    window.location.reload();
  }

  if (data.advertisements.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: theme ? "#fff" : "#0E141C",
        }}
      >
        <img src={require("../../../images/min1.png")} alt="" />
        <h1 style={{ color: theme ? "#000" : "#fff", textAlign: "center" }}>
          Поки що ніхто не шукає тіммейта :( <br />
          <Link className={css.link} to={"/userhomepage"}>
            Але ви можете створити своє оголошення
          </Link>
          <br />
        </h1>
      </div>
    );
  }
  return (
    <div
      className={css.section}
      style={{ background: theme ? "#fff" : "#0E141C" }}
    >
      <button className={css.reloadButton} onClick={handleUpdatePage}><img src={require('../../../images/reload.png')} alt="reload" /></button>
      <ul className={css.articles__list}>
        {data.advertisements.map(
          ({ line, server, rank, queue, ign, _id, owner }) => (
            <li className={css.list_item} key={_id}>
              <MateAdv
                key={_id}
                _id={_id}
                line={line}
                server={server}
                rank={rank}
                ign={ign}
                queue={queue}
                owner={owner}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};
