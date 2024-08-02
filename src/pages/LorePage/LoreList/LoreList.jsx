import PostUrlLore from "../../api/LoreApi";
import LoreArticle from "./LoreArticle/LoreArticle";
import { useEffect, useState } from "react";
import css from "./LoreList.module.css";
import { ThemeContext } from "../../../App";
import { useContext } from "react";

const LoreList = () => {
  const [data, setData] = useState({
    lore: [],
  });

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(PostUrlLore)
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

  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredOptions = data.lore.filter(({ char }) =>
    char.toLowerCase().includes(filterValue.toLowerCase())
  );

  if (data.lore.length === 0)
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
        <h1 style={{ color: theme ? "#000" : "#fff" }}>
          Зачекайте поки наші міньони шукають інформацію...
        </h1>
      </div>
    );

  return (
    <div
      className={css.section}
      style={{ background: theme ? "#fff" : "#0E141C" }}
    >
      <div className={css.selectBox}>
        <input
          style={{
            border: theme ? "1px solid #111" : "1px solid #fff",
            color: theme ? "#000" : "#fff",
          }}
          className={css.findLore}
          type="text"
          onChange={handleFilterChange}
        />
        <img
          style={{
            borderTop: theme ? "1px solid #111" : "1px solid #fff",
            borderRight: theme ? "1px solid #111" : "1px solid #fff",
            borderBottom: theme ? "1px solid #111" : "1px solid #fff",
          }}
          src={require(theme
            ? "../../../images/search-black.png"
            : "../../../images/search-white.png")}
          alt=""
        />
      </div>
      {filteredOptions.length === 0 ? (
        <h2 className={css.sry} style={{ color: theme ? "#000" : "#fff" }}>
          Вибачте, але наразі ми ще не переклали історію цього чемпіону :(
        </h2>
      ) : (
        <ul className={css.articles__list}>
          {filteredOptions.map(({ title, sub, thumbSrc, _id, char }) => (
            <li className={css.list_item} key={_id}>
              <LoreArticle
                key={_id}
                _id={_id}
                title={title}
                sub={sub}
                thumbSrc={thumbSrc}
                char={char}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LoreList;
