import css from './Footer.module.css';
import useAnalyticsEventTracker from '../../googleAnalytics/useAnalyticsEventTracker';


export const Footer = () => {

    const gaEventTracker = useAnalyticsEventTracker('Contact us');

    return(
        <footer className={css.footer}>
            <div className={css.social_cont}>
                <a onClick={() => gaEventTracker('tg')} href="https://t.me/ukrainian_lol"><span className={css.social_link}><img width={20} src={require('../../images/tg.png')} alt="telegram" /> t.me/ukrainian_lol</span></a>
                <a onClick={() => gaEventTracker('email')} className={css.social_link} href="mailto:ukarainian.lol@ukr.net"><img width={20} src={require('../../images/mail.png')} alt="mail" /> ukarainian.lol@ukr.net</a>
            </div>
        </footer>
    )
}