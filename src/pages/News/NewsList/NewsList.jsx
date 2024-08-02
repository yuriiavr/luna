import css from './NewsList.module.css'
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Article  from './Article/Article';
import PostUrl from '../../api/ApiLink';
import { ThemeContext } from '../../../App'
import { useContext } from "react";

const NewsList = () => {
    
    const [data, setData] = useState({
    articles: []
      });
    
    useEffect(() => {
        fetch(PostUrl)
          .then(res => res.json())
          .then((result) => {
              setData(result);
            },
            (error) => {
                console.error(error);
            })
    }, [])
  
  const { theme } = useContext(ThemeContext)

  
      if(data.articles.length === 0)
      return (
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: theme ? '#fff' : '#0E141C'}}>
            <img src={require('../../../images/min1.png')} alt="" />
            <h1 style={{color: theme ? '#000' : '#fff'}}>Зачекайте поки наші міньони шукають інформацію...</h1>
          </div>
        )
    
      return (
        <div className={css.section} style={{ background: theme ? "#fff" : "#0E141C"}}>
          <ul className={css.articles__list}>
            {data.articles.map(({title, sub, thumbSrc, _id, isFavorite}) => (
              <li className={css.list_item} key={_id}>
                <Article _id={_id} title={title} sub={sub} thumbSrc={thumbSrc} isFavorite={isFavorite}/>
              </li>
            ))}
          </ul>
        </div>
      );
}

NewsList.propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        sub: PropTypes.string.isRequired,
        thumbSrc: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      })
    ),
};

export default NewsList;