import { Link } from "react-router-dom";
import css from "./Slider.module.css"
import { Zoom  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ThemeContext } from '../../../App'
import { useContext } from "react";

const slideImages = [
  {
    url: "https://www.leagueoflegends.com/static/mage-3982e64e8ed1cd4dceec59ad308a161d.png",
    caption: 'Slide 1'
  },
  {
    url: "https://www.leagueoflegends.com/static/assassin-a648ef647c30c9411666320760cf348b.png",
    caption: 'Slide 2'
  },
  {
    url: "https://www.leagueoflegends.com/static/support-67a9e712458a12bbb8282bda5333a0ba.png",
    caption: 'Slide 3'
  },
  {
    url: "https://www.leagueoflegends.com/static/tank-585e210d26783e11b97d62eafa248ff4.png",
    caption: 'Slide 4'
  },
  {
    url: "https://www.leagueoflegends.com/static/marksman-479be0ed78d734df0bbf0dee3d6a512b.png",
    caption: 'Slide 5'
  },
  {
    url: "https://www.leagueoflegends.com/static/fighter-a4437cd565f0ef83367b671e5d07fe5c.png",
    caption: 'Slide 6'
  },
];


const Slider = () => {

  const { theme } = useContext(ThemeContext)

    return (
        <div className={css.cont} style={{ background: theme ? '#fff' : '#0E141C'}}>
            <div className={css.textCont}>
                <h3 className={css.title} style={{ color: theme ? '#000' : '#fff'}}>Lore</h3>
                <span className={css.sub} style={{ color: theme ? '#000' : '#fff'}}>Читайте історії <br /> улюблених персонажів <br /> українською!</span>
                <div className={css.buttonCont}>
                  <Link className={css.button} to={'/lore'}>Читати</Link>
                </div>
            </div>
            <div className={css.slideContainer}>
                <Zoom 
                    arrows={false}
                    duration={5000}
                    canSwipe={false}
                    pauseOnHover={false}
                >
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                        <div>
                            <img className={css.slideImage} src={slideImage.url} alt="" />
                        </div>
                    </div>
                ))}
                </Zoom >
            </div>
        </div>
    )
}

export default Slider