import css from './AdditionalList.module.css'
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AdditionalArticle  from './AdditionalArticle/AdditionalArticle';
import PostUrlAdditional from '../../api/AdditionalApi';
import { ThemeContext } from '../../../App'
import { useContext } from "react";

const AdditionalList = () => {
    
    const [data, setData] = useState({
        additional: []
    });
    
    useEffect(() => {
        fetch(PostUrlAdditional)
          .then(res => res.json())
          .then((result) => {
              setData(result);
            },
            (error) => {
                console.error(error);
            })
    }, [])
  
    const { theme } = useContext(ThemeContext)

  
      if(data.additional.length === 0)
      return (
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: theme ? '#fff' : '#0E141C'}}>
            <img src={require('../../../images/min1.png')} alt="" />
            <h1 style={{color: theme ? '#000' : '#fff'}}>Зачекайте поки наші міньони шукають інформацію...</h1>
          </div>
        )
    
      return (
        <div className={css.section} style={{ background: theme ? "#fff" : "#0E141C"}}>
          <ul className={css.articles__list}>
            {data.additional.map(({title, sub, thumbSrc, _id, isFavorite}) => (
              <li className={css.list_item} key={_id}>
                <AdditionalArticle _id={_id} title={title} sub={sub} thumbSrc={thumbSrc} isFavorite={isFavorite}/>
              </li>
            ))}
          </ul>
        </div>
      );
}

AdditionalList.propTypes = {
    additional: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        sub: PropTypes.string.isRequired,
        thumbSrc: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      })
    ),
};

export default AdditionalList;