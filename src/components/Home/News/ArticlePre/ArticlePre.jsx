import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './ArticlePre.module.css';
import { ThemeContext } from '../../../../App'
import { useContext } from 'react';

export const ArticlePre = ({ title, sub, thumbSrcV, _id }) => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={css.card}>
            <Link className={css.link} to={`/post/${_id}`}>
                <div className={css.border}>
                    <div className={css.content__cont}>
                        <img className={css.content__image} src={thumbSrcV} alt="" />
                        <div className={css.content__box}>
                            <span className={css.type} style={{ color: theme ? 'rgb(0, 96, 134)' : 'rgb(0, 154, 214)'}}>Новини</span>
                            <h2 dangerouslySetInnerHTML={{__html: title}} className={css.title} style={{ color: theme ? '#000' : '#fff'}}></h2>
                            <span dangerouslySetInnerHTML={{__html: sub.length >= 50 ? sub.slice(0, 50 - 3) + '...' : sub}} className={css.sub} style={{ color: theme ? '#000' : '#fff'}}></span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

ArticlePre.propTypes = {
    title: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
    thumbSrc: PropTypes.string,
    favorite: PropTypes.bool,
}

export default ArticlePre;