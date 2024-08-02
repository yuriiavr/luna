import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostUrl  } from "../../../pages/api/ApiLink";
import css from './Article.module.css';
import './Article.css';
import { ThemeContext } from '../../../App'
import { useContext } from "react";

const Article = () => {

    const { postId } = useParams();
    const [ post, setPost] = useState({
        articles: []
    });
    
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        fetchArticle();
    }, [postId, setPost])

    

    const fetchArticle = () =>{
        if(postId){
            fetch(PostUrl + postId)
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
        <div id="main" className={css.fullpost} style={{ background: theme ? '#fff' : '#0E141C'}}>
            <div>
                <div id="back" style={{
                    backgroundImage: `linear-gradient(to right, #21222966, #1a1b2066), url(${post.articles.thumbSrc})`,
                    position: 'absolute',
                    width: '100%',
                    height: window.innerWidth < 1200 ? 400 : 480 ,
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
                                    <h2 dangerouslySetInnerHTML={{__html: post.articles.title}} className={css.fullpost__title} ></h2>
                                </div>
                                <img className={css.bannerImg} src={post.articles.thumbSrc} alt="About banner image" />
                            </div>
                    </div>
            </div>
            
            <div className={css.text}>
                <span dangerouslySetInnerHTML={{__html: post.articles.sub}} className={css.fullpost__sub} style={{ color: theme ? '#000' : '#fff'}}></span>
            </div>
        </div>
    )
}

export default Article;
