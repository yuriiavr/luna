import css from './Banner.module.css'
import { ThemeContext } from '../../../App'
import { useContext } from 'react'
import backgroundImg from "../../../images/background.png";

const Banner = () => {

    const { theme } = useContext(ThemeContext)

    const background = theme ? '#fff' : '#0E141C'



    return (
        <div className={css.cont} style={{
            backgroundColor: `${background}`,
            backgroundImage: theme ? `url(${backgroundImg})` : ''
        }}>
            <img className={css.bannerImg} src={"https://res.cloudinary.com/dfasgvfex/image/upload/v1712075741/web-banners/banner.jpg"} alt="banner" />
            <h1 className={css.bannerTitle}>Український <br/> простір гравців LoL</h1>
        </div>
    )
}

export default Banner