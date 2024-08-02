import css from './BannerNews.module.css'
import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import PostUrl from '../../../pages/api/ApiLink';
import ArticlePre from './ArticlePre/ArticlePre';
import { ThemeContext } from '../../../App'
import backgroundImg from "../../../images/background.png";

const BannerNews = () => {
    const [data, setData] = useState({
        articles: []
    });
  
  const showNews = data.articles.slice(-3)
  
    useEffect(() => {
        fetch(PostUrl)
          .then(res => res.json())
          .then((result) => {
              setData(result);
            },
            (error) => {
                console.error(error);
            })
    }, []);
  
      const { theme } = useContext(ThemeContext)

      const background = theme ? '#fff' : '#0E141C'
  
      if(data.articles.length === 0)
        return (
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: theme ? '#fff' : '#0E141C'}}>
            <img src={require('../../../images/min1.png')} alt="" />
            <h1 style={{color: theme ? '#000' : '#fff'}}>Зачекайте поки наші міньони шукають інформацію...</h1>
          </div>
        )
    
      return (
        <div className={css.section} style={{
          background: `${background}`,
          backgroundImage: theme ? `url(${backgroundImg})` : ''
        }}>
          <ul className={css.articles__list}>
            {showNews.reverse().map(({title, sub, thumbSrcV, _id, isFavorite}) => (
              <li className={css.list_item} key={_id}>
                <ArticlePre _id={_id} title={title} sub={sub} thumbSrcV={thumbSrcV} isFavorite={isFavorite}/>
              </li>
            ))}
          </ul>
        </div>
      );
}

BannerNews.propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        sub: PropTypes.string.isRequired,
        thumbSrc: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      })
    ),
};

export default BannerNews