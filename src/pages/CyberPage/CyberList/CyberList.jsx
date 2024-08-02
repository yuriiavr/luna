import PostUrlCyber from "../../api/CyberApi";
import CyberArticle from "./CyberArticle/CyberArticle"
import { useEffect, useState } from 'react';
import css from './CyberList.module.css'
import { ThemeContext } from '../../../App'
import { useContext } from "react";

const CyberList = () => {

    const [data, setData] = useState({
        cyber: []
    });

    const { theme } = useContext(ThemeContext)
    
    useEffect(() => {
        fetch(PostUrlCyber)
          .then(res => res.json())
          .then((result) => {
              setData(result);
            },
            (error) => {
                console.error(error);
            })
    }, []);


    if (data.cyber.length === 0)
        return (
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: theme ? '#fff' : '#0E141C'}}>
            <img src={require('../../../images/min1.png')} alt="" />
            <h1 style={{color: theme ? '#000' : '#fff', textAlign: 'center'}}>Поки що немає новин :( <br /> Ми шукаємо хто заповнить цю вкладинку <br /> Якщо це ти - напиши нам</h1>
          </div>
        )
    
    return (
            <div className={css.section} style={{ background: theme ? '#fff' : '#0E141C' }}>
                <ul className={css.articles__list}>
                    {data.cyber.map(({ title, sub, thumbSrc, _id }) => (
                    <li className={css.list_item} key={_id}>
                        <CyberArticle key={_id} _id={_id} title={title} sub={sub} thumbSrc={thumbSrc} />
                    </li>
                    ))}
                </ul>
            </div>
    )
}

export default CyberList