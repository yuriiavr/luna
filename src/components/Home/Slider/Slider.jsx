import { Link } from "react-router-dom";
import css from "./Slider.module.css"
import { Zoom  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ThemeContext } from '../../../App'
import { useContext } from "react";

import champ1 from "../../../images/champ1.avif";
import champ2 from "../../../images/champ2.avif";
import champ3 from "../../../images/champ3.avif";
import champ4 from "../../../images/champ4.avif";
import champ5 from "../../../images/champ5.avif";
import champ6 from "../../../images/champ6.avif";

const slideImages = [
  {
    url: champ1,
    caption: 'Slide 1'
  },
  {
    url: champ2,
    caption: 'Slide 2'
  },
  {
    url: champ3,
    caption: 'Slide 3'
  },
  {
    url: champ4,
    caption: 'Slide 4'
  },
  {
    url: champ5,
    caption: 'Slide 5'
  },
  {
    url: champ6,
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
                            <img className={css.slideImage} src={slideImage.url} alt={slideImage.caption} />
                        </div>
                    </div>
                ))}
                </Zoom >
            </div>
        </div>
    )
}

export default Slider