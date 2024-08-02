import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostUrlCyber } from "../../../pages/api/CyberApi";
import css from './CyberArticle.module.css'
import { ThemeContext } from '../../../App'
import { useContext } from "react";


const CyberArticle = () => {

    const { postId } = useParams();
    const [ post, setPost] = useState({
        cyber: []
    });
    

    useEffect(() => {
        fetchArticle();
    }, [postId, setPost])

    const { theme } = useContext(ThemeContext)

    const fetchArticle = () =>{
        if(postId){
            fetch(PostUrlCyber + postId)
            .then(res => res.json())
            .then((result) => {
                setPost(result.data);
              },
              (error) => {
                  console.error(error);
              }
            )
        }
    }

    return(
        <div id="main" className={css.fullpost} style={{ background: theme ? '#fff' : '#0E141C' }}>
            <div>
                <div id="back" style={{
                    backgroundImage: `linear-gradient(to right, #21222966, #1a1b2066), url(${post.cyber.thumbSrc})`,
                    position: 'absolute',
                    width: '100%',
                    height: window.innerWidth < 1200 ? 400 : 500 ,
                    top: 0,
                    left: 0,
                    filter: 'blur(5px)',
                    zIndex: -1,
                    backgroundSize: 'cover',
                }}>
                </div>
                    <div className={css.bannerBox} >
                            <div className={css.bannerContent}>
                                <div className={css.bannerTitleBox}>
                                    <h2 dangerouslySetInnerHTML={{__html: post.cyber.title}} className={css.fullpost__title}></h2>
                                </div>
                                <img className={css.bannerImg} src={post.cyber.thumbSrc} alt="About banner image" />
                            </div>
                    </div>
            </div>
            
            <div className={css.text}>
                <span dangerouslySetInnerHTML={{__html: post.cyber.sub}} style={{color: theme ? '#000' : '#fff' }} className={css.fullpost__sub}></span>
            </div>
        </div>
    )
}

export default CyberArticle