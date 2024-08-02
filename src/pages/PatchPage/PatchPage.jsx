import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import css from "./PatchPage.module.css";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const PatchPage = () => {
  const { theme } = useContext(ThemeContext);

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <>
      <Header />

      <div id="top" style={{ background: theme ? "#fff" : "#0E141C" }}>
        <div className={css.buttonUp}>
          <Link to={"/patch/#top"}>
            <img src={require("../../images/upbutton.png")} alt="up button" />
          </Link>
        </div>

        <div className={css.bannerBox}>
          <div className={css.bannerContent}>
            <div className={css.bannerTitleBox}>
              <span></span>
              <h2>
                Зміни оновлення <br /> 14.8
              </h2>
            </div>
            <img
              className={css.bannerImg}
              src={
                "https://res.cloudinary.com/dfasgvfex/image/upload/v1712075741/web-banners/patchbanner.jpg"
              }
              alt="patch page banner"
            />
          </div>
        </div>
        <div className={css.container}>
          <div
            style={{ background: theme ? "#fff" : "#0E141C" }}
            className={css.changePrew}
          >
            <div className={css.changeSection}>
              <div>
                <span
                  style={{ color: theme ? "#000" : "#fff" }}
                  className={css.changeTitle}
                >
                  {" "}
                  <img
                    style={{ width: "30px" }}
                    src={require("../../images/buff.ico")}
                    alt="buff"
                  />{" "}
                  Посилені
                </span>
              </div>
              <div className={css.changeCont}>
                <Link to="/patch/#Azir">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713363792/lol-champs-icons/azir.jpg"
                    }
                    alt="Azir"
                  />
                </Link>
                <Link to="/patch/#Briar">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713363792/lol-champs-icons/briar.jpg"
                    }
                    alt="Briar"
                  />
                </Link>
                <Link to="/patch/#Zac">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713363792/lol-champs-icons/zac.jpg"
                    }
                    alt="Zac"
                  />
                </Link>
                <Link to="/patch/#Zeri">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713363792/lol-champs-icons/zeri.jpg"
                    }
                    alt="Zeri"
                  />
                </Link>
              </div>
              <div>
                <span
                  style={{ color: theme ? "#000" : "#fff" }}
                  className={css.changeTitle}
                >
                  {" "}
                  <img
                    style={{ transform: "rotate(180deg)", width: "30px" }}
                    src={require("../../images/debuff.ico")}
                    alt="debuff"
                  />{" "}
                  Послаблені
                </span>
              </div>
              <div className={css.changeCont}>
                <Link to="/patch/#Jarvan">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/jarvan.jpg"
                    }
                    alt="Jarvan"
                  />
                </Link>
                <Link to="/patch/#Graves">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/graves.jpg"
                    }
                    alt="Graves"
                  />
                </Link>
                <Link to="/patch/#Draven">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/draven.jpg"
                    }
                    alt="Draven"
                  />
                </Link>
                <Link to="/patch/#Hwei">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/hwei.jpg"
                    }
                    alt="Hwei"
                  />
                </Link>
                <Link to="/patch/#Akali">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/akali.jpg"
                    }
                    alt="Akali"
                  />
                </Link>
                <Link to="/patch/#Ryze">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364213/lol-champs-icons/ryze.jpg"
                    }
                    alt="Hwei"
                  />
                </Link>
                <Link to="/patch/#Leblanc">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/leblanc.jpg"
                    }
                    alt="Leblanc"
                  />
                </Link>
                <Link to="/patch/#Kaisa">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364213/lol-champs-icons/kaisa.jpg"
                    }
                    alt="Kaisa"
                  />
                </Link>
                <Link to="/patch/#Jhin">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364213/lol-champs-icons/jhin.jpg"
                    }
                    alt="Jhin"
                  />
                </Link>
                <Link to="/patch/#Thresh">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/thresh.jpg"
                    }
                    alt="Thresh"
                  />
                </Link>
                <Link to="/patch/#Olaf">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1712074921/lol-champs-icons/olaf.jpg"
                    }
                    alt="Olaf"
                  />
                </Link>
                <Link to="/patch/#Sylas">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1712074921/lol-champs-icons/sylas.jpg"
                    }
                    alt="Sylas"
                  />
                </Link>
                <Link to="/patch/#Galio">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1712074920/lol-champs-icons/galio.jpg"
                    }
                    alt="Galio"
                  />
                </Link>
              </div>
            </div>
            <div className={css.changeSection}>
              <div>
                <span
                  style={{ color: theme ? "#000" : "#fff" }}
                  className={css.changeTitle}
                >
                  {" "}
                  <img
                    style={{ width: "40px" }}
                    src={require("../../images/rework.png")}
                    alt="rework"
                  />{" "}
                  Змінені
                </span>
              </div>
              <div className={css.changeCont}>
                <Link to="/patch/#Mordekaiser">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713365012/lol-champs-icons/mordekaiser.jpg"
                    }
                    alt="Mordekaiser"
                  />
                </Link>
                <Link to="/patch/#Skarner">
                  <img
                    className={css.changeChampIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713365084/lol-champs-icons/skarner.jpg"
                    }
                    alt="Skarner"
                  />
                </Link>
              </div>
              <div>
                <span
                  style={{ color: theme ? "#000" : "#fff" }}
                  className={css.changeTitle}
                >
                  {" "}
                  <img
                    style={{ width: "40px" }}
                    src={require("../../images/items.png")}
                    alt="items"
                  />{" "}
                  Системні зміни
                </span>
              </div>
              <div className={css.changeCont}>
                <Link to="/patch/#Grubs">
                  <img
                    className={css.changeItemIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713365221/lol-items-icons/grubs.png"
                    }
                    alt="Grubs"
                  />
                </Link>
                <Link to="/patch/#Baron">
                  <img
                    className={css.changeItemIcon}
                    src={
                      "https://res.cloudinary.com/dfasgvfex/image/upload/v1713365334/lol-items-icons/baron.png"
                    }
                    alt="Baron"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{
              background: theme ? "#fff" : "#0E141C",
              color: theme ? "#000" : "#fff",
            }}
          >
            <h2>Чемпіони</h2>
            <div id="Akali" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/akali.jpg"
                  }
                  alt="akali main"
                />
                <span>Акалі</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Ми підвищуємо початковий рівень здоров'я Акалі, щоб допомогти їй
                більш послідовно досягати своєї міцної середньої та пізньої гри.
                Її базове здоров'я було незвично низьким у порівнянні з іншими
                чемпіонами, тому це має наблизити її до однолітків.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <h3>Базові характеристики</h3>
                  </div>
                  <ul>
                    <li>Базове здоров'я: 570 ⇒ 600</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Azir" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713363792/lol-champs-icons/azir.jpg"
                  }
                  alt="azir main"
                />
                <span>Азір</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Азір був основним персонажем професійної гри надзвичайно довгий
                час завдяки своїй прийнятній лінії та неймовірній пізній грі та
                потенціалу створювати ігрові ситуації. Ми відрегулюємо його
                безпеку на ранній стадії, знизивши базову регенерацію здоров'я
                та ранню шкоду його W, з метою надати його контрпікам кращу
                можливість перемогти його на лінії.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <h3>Базові характеристики</h3>
                  </div>
                  <ul>
                    <li>Регенерація здоров'я за 5 секунд: 5 ⇒ 3.5</li>
                  </ul>
                </div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/AzirW.png"
                      }
                      alt="azir W"
                    />
                    <h3> [W]</h3>
                  </div>
                  <ul>
                    <li>
                      Магічна шкода: 0-77 (залежно від рівня)
                      (+50/67/84/101/118) (+55% AP) ⇒ 0-77 (залежно від рівня)
                      (+50/65/80/95/110). (+55% AP)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Briar" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713363792/lol-champs-icons/briar.jpg"
                  }
                  alt="briar main"
                />
                <span>Браєр</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Брайар продовжує бути дуже сильною на нижчих рівнях
                майстерності, тому ми знову повертаємось до неї, щоб вирішити цю
                проблему. Виправлення помилок у Sundered Sky (одному з її
                основних предметів) сприяло деякій її силі, тому ми послаблюємо
                її, даючи при цьому ще одне незначне посилення Q для досвідчених
                гравців, які люблять змінювати цілі та перевтілюватись в Лі
                Сіна, стрибаючи до вардів.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <h3>Базові характеристики</h3>
                  </div>
                  <ul>
                    <li>Збільшення здоров'я: 100 ⇒ 95</li>
                  </ul>
                </div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/BriarQ.png"
                      }
                      alt="briar Q"
                    />
                    <h3> [Q]</h3>
                  </div>
                  <ul>
                    <li>Діапазон: 450 ⇒ 475</li>
                  </ul>
                </div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/BriarW.png"
                      }
                      alt="briar W"
                    />
                    <h3> [Q]</h3>
                  </div>
                  <ul>
                    <li>
                      Додаткова швидкість атаки: 54/68/82/96/110% ⇒
                      55/65/75/85/95%
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Draven" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/draven.jpg"
                  }
                  alt="draven main"
                />
                <span>Дрейвен</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                У ранній грі Дравена бракувало сили, яка дала б йому можливість
                контролювати лінію. Ми хочемо відновити здатність Дравена бути
                хуліганом на лінії, тому ми вкладаємо трохи більше сили в його
                Q, щоб дозволити йому бути саме таким.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/DravenSpinning.png"
                      }
                      alt="draven Q"
                    />
                    <h3> [Q]</h3>
                  </div>
                  <ul>
                    <li>
                      Додаткова фізична шкода: 40/45/50/55/60
                      (+75/85/95/105/115% додаткового AD) ⇒ 45/50/55/60/65
                      (+75/85/95/105/115% бонус AD)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Galio" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1712074920/lol-champs-icons/galio.jpg"
                  }
                  alt="galio main"
                />
                <span>Галіо</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Галіо наближається до розумного рівня сили, але ще не повністю
                там. Щоб досягти цього, ми даємо йому два невеликі посилення -
                збільшення базової швидкості пересування, тому що це важлива для
                нього характеристика, особливо для доступу до цілей для
                активації пасивної здібності. Ми також трохи зменшимо ранню
                перезарядку навички Q, щоб допомогти йому отримувати більше
                пасивних відшкодувань.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <h3>Базові характеристики</h3>
                  </div>
                  <ul>
                    <li>Базова швидкість руху: 335 ⇒ 340</li>
                  </ul>
                </div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/GalioQ.png"
                      }
                      alt="galio Q"
                    />
                    <h3> [Q]</h3>
                  </div>
                  <ul>
                    <li>
                      Перезарядка: 12/10,75/9,5/8,25/7 ⇒ 11/10/9/8/7 секунд.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Graves" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/graves.jpg"
                  }
                  alt="graves main"
                />
                <span>Грейвс</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Ми даємо Грейвзу дуже потрібні посилення, при цьому зміщуючи
                його в бік предметів з критичним ударом та атак із повторами,
                що, на нашу думку, є більш здоровим місцем для його ігрового
                процесу, ніж миттєвий летальний вихід. Хоча зміна швидкості
                перезарядки є дещо ризикованим посиленням, ми вважаємо, що це
                буде корисно для Грейвза, і ми відстежуватимемо ситуацію, якщо
                його рівень сили виявиться надто високим.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/passive/GravesTrueGrit.png"
                      }
                      alt="graves P"
                    />
                    <h3> [Пасивне вміння]</h3>
                  </div>
                  <ul>
                    <li>
                      Масштабування швидкості атаки: збільшення швидкості атаки
                      від нерівневих джерел до часу перезарядки на 35%
                    </li>
                    <li>Коефіцієнт критичної шкоди на дробину: 40% ⇒ 45%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Olaf" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1712074921/lol-champs-icons/olaf.jpg"
                  }
                  alt="olaf main"
                />
                <span>Олаф</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Минулого патчу Олаф здобув чималу силу в лісі, але йому все ще
                потрібна додаткова допомога, перш ніж він досягне стабільного
                рівня. Подібно до Сайласа, він відчуває певні обмеження у своїй
                основній ролі, тому ми зосередимося на збільшенні його сили в
                лісі. Його початкова зачистка вже добра, але подальші зачистки
                можна поліпшити, оскільки він має бути одним із найшвидших
                чемпіонів у грі.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.6.1/img/spell/OlafAxeThrowCast.png"
                      }
                      alt="olaf Q"
                    />
                    <h3> [Q]</h3>
                  </div>
                  <ul>
                    <li>
                      Додаткова шкода монстрам: 5/10/15/20/25 ⇒ 5/15/25/35/45
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Hwei" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/hwei.jpg"
                  }
                  alt="hwei main"
                />
                <span>Хвей</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Ми очікували, що доведеться балансувати Хвея навколо професійної
                гри з доволі низькими показниками перемог для звичайних гравців.
                Однак, з розвитком професійного сезону виявилося, що в нас
                більше простору для маневру, ніж ми спочатку думали. Тому ми
                даємо йому невелике посилення пасивної здібності, що трохи
                підвищить його ефективність у нижчих рівнях майстерності, де
                гравці гірше ухиляються від шкоди. Наша мета - зробити його
                помірно присутнім чемпіоном у професійній грі, але також досить
                успішним, як і більшість інших магів, у solo queue.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/passive/HweiPassive.png"
                      }
                      alt="hwei P"
                    />
                    <h3>[Пасивне вміння]</h3>
                  </div>
                  <ul>
                    <li>
                      Додаткова магічна шкода: 35-180 (залежно від рівня) (+30%
                      AP) ⇒ 35-180 (залежно від рівня) (+35% AP)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Jarvan" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/jarvan.jpg"
                  }
                  alt="jarvan main"
                />
                <span>Джарван IV</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Джарван IV - один із найпростіших джанглерів, тому завжди, коли
                його показник перемог у нижчих дивізіонах ледь перевищує 50%, це
                означає, що він насправді слабкий і потребує допомоги. Щоб
                посилити його, ми частково скасовуємо послаблення пасивної
                здібності з патчу 13.18, оскільки це був задовільний аспект його
                набору вмінь, що забезпечував кращу швидкість зачистки та
                гарантію вбивств, корисний для гравців усіх рівнів майстерності.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/passive/JarvanIVP.png"
                      }
                      alt="jarvan P"
                    />
                    <h3> [Пасивне вміння]</h3>
                  </div>
                  <ul>
                    <li>
                      Додаткова фізична шкода: 6% від поточного здоров’я цілі ⇒
                      7% від поточного здоров’я цілі
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Jhin" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364213/lol-champs-icons/jhin.jpg"
                  }
                  alt="jhin main"
                />
                <span>Джин</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                З оновленням 14.1 у гру закралася помилка: у Сенни збільшився
                шанс вибити душу, коли її союзник використовує предмет
                підтримки. Через це вона дуже комфортно почувала себе в ролі
                Кері з упором на зачистку. Тепер помилку виправлено, а
                ймовірності скориговано.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/passive/Jhin_P.png"
                      }
                      alt="jhin P"
                    />
                    <h3>[Пасивне вміння]</h3>
                  </div>
                  <ul>
                    <li>
                      Додаткова швидкість пересування під час критичного удару:
                      10% (+0,4% додаткової швидкості атаки) ⇒ 14% (+0,4%
                      додаткової швидкості атаки)
                    </li>
                  </ul>
                </div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/JhinQ.png"
                      }
                      alt="jhin Q"
                    />
                    <h3>[Q]</h3>
                  </div>
                  <ul>
                    <li>
                      Мінімальна фізична шкода: 45/70/95/120/145
                      (+35/42,5/50/57,5/65% AD) (+60% AP) ⇒ 44/69/94/119/144
                      (+44/51,5/59). /66,5/74% AD) (+60% AP)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Kaisa" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364213/lol-champs-icons/kaisa.jpg"
                  }
                  alt="kaisa main"
                />
                <span>Кай'Са</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Ми хотіли посилити Кай'Су, щоб заохотити більше різноманітності
                ботлейнерів у соло-к'ю та професійній грі, при цьому не
                торкаючись її гібридних збірок AP, які можуть бути
                проблематичними. Ми збільшили співвідношення фізичної шкоди на
                її навичці Q, щоб підкреслити шкоду, якя вимагає більшої
                відданості та грає на її унікальних асасино-подібних
                характеристиках.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/KaisaQ.png"
                      }
                      alt="kaisa Q"
                    />
                    <h3>[Q]</h3>
                  </div>
                  <ul>
                    <li>
                      Шкода за ракету: 40/55/70/85/100 (+50% додаткового AD)
                      (+20% AP) ⇒ 40/55/70/85/100 (+55% додаткового AD) (+20%
                      AP).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Leblanc" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/leblanc.jpg"
                  }
                  alt="leblanc main"
                />
                <span>Ле Бланк</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                ЛеБлан страждає як у соло/дуо черзі, так і не бачить великої
                присутності на професійній сцені, тому ми трохи посилюємо її. Ми
                знижуємо ранню перезарядку її навички W, щоб збільшити її
                можливості на лінії, оскільки її поточне базове значення на 1
                рівні трохи зависоке. Ми також підвищуємо базову шкоду її Q,
                оскільки ця навичка дуже впливає на її ранню лінійну фазу у
                вищих дивізіонах, але всі гравці відчують це посилення завдяки
                покращенню останньої атаки.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/LeblancQ.png"
                      }
                      alt="leblanc Q"
                    />
                    <h3> [Q]</h3>
                  </div>
                  <ul>
                    <li>
                      Магічна шкода: 65/90/115/140/165 (+ 45% AP) ⇒
                      70/95/120/145/170 (+ 45% AP).
                    </li>
                  </ul>
                </div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/LeblancW.png"
                      }
                      alt="leblanc W"
                    />
                    <h3>[W]</h3>
                  </div>
                  <ul>
                    <li>
                      Перезарядка: 18/16/14/12/10 ⇒ 15/13,75/12,5/11,25/10
                      секунд.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Mordekaiser" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713365012/lol-champs-icons/mordekaiser.jpg"
                  }
                  alt="mordekaiser main"
                />
                <span>Мордекайзер</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Мордекайзер довго страждав від того, що був дуже могутнім на
                нижчих рівнях гри, але занадто нестабільним на високих. Частина
                цієї диспропорції зумовлена його слабкою ранньою лінією та його
                ультимативною здібністю, яку легко контрити дешевим предметом і
                певними взаємодіями чемпіонів. У цьому патчі ми сподіваємося
                вирішити обидві ці проблемні точки, зробивши при цьому невелике
                компенсаційне послаблення його шкоди. Ми визнаємо, що зміна його
                ультимативної здібності доволі ризикована. Можливо, Мордекайзера
                не можна збалансувати без таких сильних контрзаходів, і в
                результаті гравцям Мордекайзера було б краще грати з ненадійною
                ультою, але сильнішим базовим набором. Проте ми будемо
                підтримувати цю версію Мордекайзера і робитимемо все можливе для
                його балансування з огляду на ці нові сильні сторони.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/MordekaiserQ.png"
                      }
                      alt="mordekaiser Q"
                    />
                    <h3> [Q]</h3>
                  </div>
                  <ul>
                    <li>Перезарядка: 9/7.75/6.5/5.25/4 ⇒ 8/7/6/5/4 секунд</li>
                  </ul>
                </div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/MordekaiserE.png"
                      }
                      alt="mordekaiser W"
                    />
                    <h3> [W]</h3>
                  </div>
                  <ul>
                    <li>
                      Магічна шкода: 80/95/110/125/140 (+60% AP) ⇒
                      70/85/100/115/130 (+60% AP).
                    </li>
                  </ul>
                </div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/MordekaiserR.png"
                      }
                      alt="mordekaiser R"
                    />
                    <h3>[R]</h3>
                  </div>
                  <ul>
                    <li>
                      Взаємодія при втечі з Царства Смерті: Чемпіони більше не
                      можуть втекти з Царства смерті Мордекайзера,
                      використовуючи "Пояс зі срібла", "Меркуріальний ятаган",
                      "Незламна воля" Алістара, "Апельсинки" Гангпланка, "Подих
                      життя" Міліо, "Рагнарок" Олафа або "Жорстокий бойовий рев"
                      Ренгара. Однак імунітет до контролю натовпу все одно
                      перешкоджатиме застосуванню Царства смерті
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Sylas" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1712085311/lol-champs-icons/sylas.png"
                  }
                  alt="Sylas main"
                />
                <span>Сайлас</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Тепер, маючи дані про те, як модифікатор його навички Q впливає
                на показник перемог, особливо з огляду на можливу його появу в
                якості флекс-піку на MSI, ми додатково посилюємо Сайласа на ролі
                джанглера. Оскільки наразі немає можливості для налаштувань,
                орієнтованих на мідлейн, ми повністю видалимо модифікатор
                навички Q для монстрів, адже його розчистка джунглів все ще має
                великий простір для поліпшення.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.6.1/img/spell/SylasQ.png"
                      }
                      alt="sylas Q"
                    />
                    <h3>[Q]</h3>
                  </div>
                  <ul>
                    <li>Шкода по монстрах: 70% ⇒ 100%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Ryze" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364213/lol-champs-icons/ryze.jpg"
                  }
                  alt="Ryze main"
                />
                <span>Райз</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Ми посилюємо Райза, зосереджуючись на звичайних гравцях, надаючи
                йому доступ до більш надійного сповільнення з меншою
                перезарядкою, що має підвищити його базову корисність для
                команди.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/RyzeW.png"
                      }
                      alt="Ryze W"
                    />
                    <h3> [Q]</h3>
                  </div>
                  <ul>
                    <li>уповільнення: 35% ⇒ 50%</li>
                    <li>
                      Перезарядка: 13/12/11/10/9 ⇒ 11/10.5/10/9.5/9 секунд
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Skarner" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713365084/lol-champs-icons/skarner.jpg"
                  }
                  alt="Skarner main"
                />
                <span>Скарнер</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                З того часу, як ми відсунули стіни на верхній лінії, Камілла не
                знаходить собі місця. У майбутньому Сталеву тінь, напевно,
                чекають великі зміни, але це не означає, що її не можна посилити
                прямо зараз. Ми підготували редагування, які допоможуть Каміллі
                отримувати перевагу на ранніх етапах матчу. Зокрема, простіше
                підбиратися до цілей – на одиночній лінії це подвійно корисно. А
                щоб посилення не вплинуло на Каміллу підтримки, ми злегка
                зменшуємо вибухову шкоду від її Пострілу гаком. Загалом після
                змін вона має залишитися життєздатною на обох позиціях, але на
                верхній лінії її потужність зросте.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <h3>Рекомендовані руни та предмети</h3>
                  </div>
                  <ul>
                    <li>
                      Рекомендовані рунічні сторінки: Оновлені наступні сторінки
                      з рунами: Aftershock, Phase Rush і Conqueror
                    </li>
                    <li>
                      Рекомендовані предмети: Додано Heartsteel, перенесено
                      Iceborn Gauntlet пізніше, підвищено пріоритет Dead Man's
                      Plate
                    </li>
                  </ul>
                </div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <h3>Базові характеристики</h3>
                  </div>
                  <ul>
                    <li>Приріст мани: 45 ⇒ 40</li>
                    <li>Приріст регенерації мани: 0.45 ⇒ 0.6</li>
                  </ul>
                </div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/SkarnerQ.png"
                      }
                      alt="Skarner Q"
                    />
                    <h3> [Q]</h3>
                  </div>
                  <ul>
                    <li>
                      Ушкодження за удар: 10/20/30/40/50 (+40% бонусного AD)
                      (+6% бонусного здоров'я) ⇒ 10/25/40/55/70 (+60% бонусного
                      AD ) (+6% бонусного здоров'я)
                    </li>
                    <li>Вартість мани: 40/45/50/55/60 ⇒ 30/35/40/45/50</li>
                    <li>
                      Тривалість баффа: 3.5 ⇒ 5 секунд (Примітка: бафф буде
                      оновлюватися при атаках і при використанні E)
                    </li>
                    <li>
                      Час блокування перетворення перевороту: 0,75 ⇒ 0,5 секунди
                    </li>
                    <li>
                      Час розкриття розтрощеної землі: 0.5 ⇒ 0.35 секунди
                      (Примітка: це час, протягом якого Скарнер стоїть на місці,
                      витягаючи камінь із землі, перш ніж зможе рухатися або
                      атакувати)
                    </li>
                  </ul>
                </div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <img
                      src={
                        "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.7.1/img/spell/SkarnerW.png"
                      }
                      alt="Skarner W"
                    />
                    <h3>[W]</h3>
                  </div>
                  <ul>
                    <li>Витрати мани: 50/55/60/65/70 ⇒ 60/65/70/75/80</li>
                    <li>
                      Магічна шкода: 60/90/120/150/180 (+80% AP) ⇒
                      50/75/100/125/150 (+80% AP)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="Thresh" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713364214/lol-champs-icons/thresh.jpg"
                  }
                  alt="thresh main"
                />
                <span>Треш</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Трешу бракує сили порівняно з тим рівнем, на якому ми хотіли б
                його бачити. І оскільки він захопливий чемпіон для перегляду на
                великій сцені, ми хочемо трохи його посилити. Ми вважаємо, що
                його шкода вже достатня, тому в цьому патчі ми підвищуємо його
                живучість, наближаючи його опірність ближнього бою до справжніх
                коротко- та ближньодіючих чемпіонів.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <h3>Базові характеристики</h3>
                  </div>
                  <ul>
                    <li>Базова броня: 31 ⇒ 33</li>
                    <li>Приріст магічного опору: 1.3 ⇒ 1.55</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Zac" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713363792/lol-champs-icons/zac.jpg"
                  }
                  alt="zac main"
                />
                <span>Зак</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Досить довгий час на жаль для своїх супротивників Зак домінує на
                топ-лінії, постійно підскакуючи. Як джанглер він доволі
                збалансований, але як топлейнер він надто потужний і
                неінтерактивний. Тому ми плануємо зменшити його безпеку на
                ранній лінії, знизивши регенерацію від його пасивної здібності.
                Це змусить його ризикувати, отримуючи відплату від супротивників
                на лінії, якщо він захоче відновити здоров'я.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <h3>Базові характеристики</h3>
                  </div>
                  <ul>
                    <li>Базова регенерація здоров'я на 5 секунд: 8 ⇒ 5</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Zeri" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713363792/lol-champs-icons/zeri.jpg"
                  }
                  alt="zeri main"
                />
                <span>Зері</span>
              </div>
              <div
                className={css.desc}
                style={{
                  color: theme ? "#000" : "#fff",
                  borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                }}
              >
                Зері дуже посприяли посилення предметів з критичним ударом у
                патчі 14.6. Хоча ми й трохи послабили Статікк Шив, вона ризикує
                стати найбільш затребуваним чемпіоном на MSI, тому ми забираємо
                трохи її ранньої живучості, щоб лінійні хулігани могли бути
                тактичним контр-піком проти неї на лінії.
              </div>
              <div>
                <div
                  className={css.changes}
                  style={{
                    color: theme ? "#000" : "#fff",
                    borderBottom: theme ? "1px solid #000" : "1px solid #fff",
                  }}
                >
                  <div className={css.changesCont}>
                    <h3>Базові характеристики</h3>
                  </div>
                  <ul>
                    <li>Базове здоров'я: 630 ⇒ 600</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Системні зміни</h2>

            <div id="Grubs" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713365221/lol-items-icons/grubs.png"
                  }
                  alt="Grubs"
                />
                <span>Глисти</span>
              </div>
              <div
                className={css.desc}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                У цьому патчі ми вносимо кілька змін до глистів. По-перше,
                переносимо їхній час появи на хвилину раніше. Це має
                синхронізувати їх появу з досягненням солістами 6 рівня, щоб
                вони могли більш змістовно боротися за цю ціль. Ми також хочемо
                розділити час їх появи з часом появи дракона, щоб створити
                більше напруги для конкуруючих команд, оскільки тепер ці цілі не
                можна буде обміняти при появі. Зміна таймеру повторної появи
                також має знизити цінність - або принаймні відстрочити -
                відправку бот-лінії на топ для полювання на глистів. По-друге,
                ми вважаємо, що нагорода за них має бути потужнішою, тому
                посилюємо як кількість стеків, так і поріг викликів.
              </div>
              <ul style={{ color: theme ? "#000" : "#fff" }}>
                <li>Поява глистів: 5 ⇒ 6 хвилина</li>
                <li>
                  Дотик порожнечі завдає шкоди за стек: 6 (зменшується вдвічі
                  для дальнобійних чемпіонів) чистої шкоди в секунду протягом 4
                  секунд ⇒ 8 (зменшується вдвічі для дальнобійних чемпіонів)
                </li>
                <li>
                  Виклик глиста: 5 стаків Порожнечі, викликати 2гого глиста
                  можна на 6 стаках ⇒ 4 стаків Порожнечі, викликати 2гого глиста
                  можна на 6 стаках
                </li>
              </ul>
            </div>

            <div id="Baron" className={css.block}>
              <div
                className={css.champ}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dfasgvfex/image/upload/v1713365334/lol-items-icons/baron.png"
                  }
                  alt="Baron main"
                />
                <span>Барон Нашор</span>
              </div>
              <div
                className={css.desc}
                style={{ color: theme ? "#000" : "#fff" }}
              >
                Дивіться поясненя в розділі Zaz'Zak's Realmspike
              </div>
              <ul style={{ color: theme ? "#000" : "#fff" }}>
                <li>Магічна шкода від Acid Pool: 10% AD ⇒ 200 (+10% AD)</li>
                <li>Уповільнення кислотного басейну: 50% ⇒ 60%</li>
                <li>Магічна шкода по території барона: 75 ⇒ 300</li>
                <li>
                  Магічна шкода від блискавки: 15% від поточного здоров'я цілі ⇒
                  20% від поточного здоров'я цілі
                </li>
                <li>
                  Магічна шкода від кислотного пострілу: 20% AD ⇒ 200 (+50% AD).
                </li>
                <li>
                  Магічна шкода від Tentacle Knock Up: 25% AD ⇒ 200 (+25% AD).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PatchPage;
