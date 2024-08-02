import css from './NewsBanner.module.css'
import { ThemeContext } from '../../../App'
import { useContext } from "react";

const NewsBanner = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={css.container}>
            <div className={css.bannerBox} style={{background: theme ? "#fff" : "#0E141C"}}>
                <div className={css.bannerContent}>
                    <div className={css.bannerTitleBox}>
                        <span>Новини</span>
                        <h2>Досі тут | <br/> Кіноматорграфічний ролик</h2>
                        <span>Битва за завтрішній день</span>
                    </div>
                    <img className={css.bannerImg} src={"https://res.cloudinary.com/dfasgvfex/image/upload/v1712075741/web-banners/newsbanner.jpg"} alt="news banner" />
                </div>
            </div>
        </div>
    )
}

export default NewsBanner