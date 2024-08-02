import css from './LoreBanner.module.css'
import { ThemeContext } from '../../../App'
import { useContext } from "react";

const LoreBanner = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={css.container}>
            <div className={css.bannerBox} style={{ background: theme ? '#fff' : '#0E141C' }}>
                <div className={css.bannerContent}>
                    <div className={css.bannerTitleBox}>
                        <span></span>
                        <h2>Історії <br /> персонажів</h2>
            
                    </div>
                    <img className={css.bannerImg} src={"https://res.cloudinary.com/dfasgvfex/image/upload/v1712075741/web-banners/lorebanner.jpg"} alt="lore banner" />
                </div>
            </div>
        </div>
    )
}

export default LoreBanner