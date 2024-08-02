import { useContext } from "react";
import { ThemeContext } from '../../../App'
import css from './AdditionalBanner.module.css'

const AdditionalBanner = () => {


    const { theme } = useContext(ThemeContext)

    return (
        <div className={css.container}>
            <div className={css.bannerBox} style={{ background: theme ? '#fff' : '#0E141C' }}>
                <div className={css.bannerContent}>
                    <div className={css.bannerTitleBox}>
                        <span></span>
                        <h2>Корисні <br /> статті</h2>
            
                    </div>
                    <img className={css.bannerImg} src={"https://res.cloudinary.com/dfasgvfex/image/upload/v1712075741/web-banners/additionalbanner.jpg"} alt="additional banner" />
                </div>
            </div>
        </div>
    )
}

export default AdditionalBanner