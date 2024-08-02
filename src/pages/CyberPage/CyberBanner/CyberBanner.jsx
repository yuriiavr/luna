import css from './CyberBanner.module.css'
import { ThemeContext } from '../../../App'
import { useContext } from "react";

const CyberBanner = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={css.container}>
            <div className={css.bannerBox} style={{ background: theme ? '#fff' : '#0E141C' }}>
                <div className={css.bannerContent}>
                    <div className={css.bannerTitleBox}>
                        <span></span>
                        <h2>Світ <br /> кіберспорту</h2>
            
                    </div>
                    <img className={css.bannerImg} src={"https://res.cloudinary.com/dfasgvfex/image/upload/v1712075741/web-banners/cyberbanner.jpg"} alt="cyber banner" />
                </div>
            </div>
        </div>
    )
}

export default CyberBanner