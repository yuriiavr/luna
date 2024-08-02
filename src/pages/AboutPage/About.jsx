import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import css from "./About.module.css"
import { ThemeContext } from '../../App'
import { useContext } from "react";

const AboutPage = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Header />


            <div className={css.cont} style={{ background: theme ? '#fff' : '#0E141C' }} >
                <div className={css.bannerBox}>
                    <div className={css.bannerContent} >
                        <div className={css.bannerTitleBox} >
                            <span>Дізнайся більше</span>
                            <h2>ПРО НАС</h2>
                            <span>Наші соц. мережі та цілі</span>
                        </div>
                        <img className={css.bannerImg} src={"https://res.cloudinary.com/dfasgvfex/image/upload/v1712075741/web-banners/aboutbanner.jpg"} alt="About banner" />
                    </div>
                </div>
                <div className={css.container} style={{ background: theme ? '#fff' : '#0E141C' }}>
                    <h3 style={{color: theme ? '#000' : '#fff' }}>Хто ми?</h3>
                    <span className={css.aboutSub} style={{color: theme ? '#000' : '#fff' }}>
                        Ми невелика група людей, яка хоче розвивати українське комюніті Ліги Легенд. Нашою основною ціллю є забезпечення гравців швидкою інформацією про
                        зміни у грі: новини, оновлення, також ви можете прочитати історію улюбленого персонажа українською. Ми хочемо зменшити споживання російського контенту,
                        аби вся інформація була доступна рідною мовою і вам не потрібно було копирсатись у тому лайні. Так як Riot не додають українську мову навіть на офіційний сайт,
                        ми створили цей проект. В майбутньому ми хотіли б аби цей веб-сайт став основним джерелом інформації для українського комюніті, додавши сповіщення про івенти
                        серед гравців: турніри, розіграші, благодійні стріми або будь-які інші активності.
                        <br />
                        Наразі наш бекенд безкоштовний, тому ви можете відчувати не приємний користувацький досвід, але ми шукаємо спонсорів, які зможуть забезпечити нас фінансами,
                        що забезпечить безперебійну роботу сайту. Такими можете стати і ви, задонативши гривню, десять, сто на наш Donatello (посилання нижче). Ми будемо раді будь-якій
                        підтримці з вашого боку, натомість обіцяємо тішити вас крутими оновленнями та швидким перекладом новин у світі Ліги Легенд. 
                    </span>
                    <h3 style={{color: theme ? '#000' : '#fff' }}>Наші соц мережі</h3>
                    <div className={css.socialCont__conts}>
                        <div className={css.socialCont}>
                            <a className={css.socialLink} style={{color: theme ? '#000' : '#fff' }} href="https://www.youtube.com/channel/UCRMm1_Gg1-guJYW1Qp50dkg">
                                <img className={css.socialImg} src={require('../../images/youtube.png')} alt="" />
                                Riven Soul
                            </a>
                        </div>
                        <div className={css.socialCont}>
                            <a className={css.socialLink} style={{color: theme ? '#000' : '#fff' }} href="https://discord.gg/2RSNDVru">
                                <img className={css.socialImg} src={require('../../images/discord.png')} alt="" />
                                Discord
                            </a>
                        </div>
                        <div className={css.socialCont}>
                            <a className={css.socialLink} style={{color: theme ? '#000' : '#fff' }} href="https://t.me/ukrainian_lol">
                                <img className={css.socialImg} src={require('../../images/telegram.png')} alt="" />
                                Telegram
                            </a>
                        </div>
                        <div className={css.socialCont}>
                            <a className={css.socialLink} style={{color: theme ? '#000' : '#fff' }} href="https://donatello.to/rivensoul/">
                                <img className={css.socialImg} src={require('../../images/donatello.png')} alt="" />
                                Donatello
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default AboutPage