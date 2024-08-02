import { Link } from 'react-router-dom';
import css from './CyberArticle.module.css';
import { ThemeContext } from '../../../../App'
import { useContext } from "react";

const CyberArticle = ({ title, sub, thumbSrc, _id }) => {
    
    const { theme } = useContext(ThemeContext)

    return (
        <div className={css.card}>
            <Link className={css.link} to={`/cyber/${_id}`}>
                <div className={css.content__cont}>
                    <div className={css.border}>
                        <div className={css.imageCont}>
                            <img className={css.content__image} src={thumbSrc} alt="" />
                        </div>
                    </div>
                    <div className={css.content__box}>
                        <h2 dangerouslySetInnerHTML={{__html: title}} className={css.title} style={{color: theme ? '#000' : '#fff' }}></h2>
                        <span dangerouslySetInnerHTML={{__html: sub.length >= 50 ? sub.slice(0, 120 - 3) + '...' : sub}} style={{color: theme ? '#000' : '#fff' }} className={css.sub}></span>
                    </div>
                </div>  
            </Link>
        </div>
    )
}

export default CyberArticle