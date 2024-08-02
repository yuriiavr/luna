import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './AdditionalArticle.module.css';
import { ThemeContext } from '../../../../App'
import { useContext } from "react";

export const AdditionalArticle = ({ title, sub, thumbSrc, _id }) => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={css.card}>
            <Link className={css.link} to={`/additionalinfo/${_id}`}>
                <div className={css.content__cont}>
                    <div className={css.border}>
                        <div className={css.imageCont}>
                            <img className={css.content__image} src={thumbSrc} alt="" />
                        </div>
                    </div>
                    <div className={css.content__box}>
                        <span className={css.type} style={{ color: theme ? 'rgb(0, 96, 134)' : 'rgb(0, 154, 214)'}}></span>
                        <h2 dangerouslySetInnerHTML={{__html: title}} className={css.title} style={{ color: theme ? '#000' : '#fff'}}></h2>
                        <span dangerouslySetInnerHTML={{__html: sub.length >= 50 ? sub.slice(0, 120 - 3) + '...' : sub}} className={css.sub} style={{ color: theme ? '#000' : '#fff'}}></span>
                    </div>
                </div>  
            </Link>
        </div>
    )
}

AdditionalArticle.propTypes = {
    title: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
    thumbSrc: PropTypes.string,
    favorite: PropTypes.bool,
}

export default AdditionalArticle;