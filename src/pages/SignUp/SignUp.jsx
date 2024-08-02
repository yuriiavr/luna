import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import css from '../LogIn/LogIn.module.css';
import { ThemeContext } from '../../App'
import { useContext, useState } from 'react';
import axios from 'axios'
import useAnalyticsEventTracker from '../../googleAnalytics/useAnalyticsEventTracker';
import { BaseUrl } from '../api/AdditionalApi';

export default function SignUp() {

    const { theme } = useContext(ThemeContext)
    
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const regCont = document.getElementById('reg-cont')
    const successCont = document.getElementById('success-cont')
    const wrongMail = document.getElementById('wrongMail')
    const wrongMailInp = document.getElementById('wrongMailInp')

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post(`${BaseUrl}/api/auth/register`, { userName, email, password })
            .then(result => {
                console.log(result)
                if (result.data.status === 'success') {
                    regCont.style.display = 'none'
                    successCont.style.display = 'flex'
                }
            })
            .catch(err => {
                console.log(err)
                if (err.code === 'ERR_BAD_RESPONSE') {
                    wrongMail.innerHTML = 'Ця пошта вже використовується'
                    wrongMail.style.color = '#ff5277'
                    wrongMailInp.style.backgroundColor = '#ff5277'
                    wrongMailInp.style.border = '#ff5277'
                    wrongMailInp.style.color = 'white'
                }
            })
    }

    const gaEventTracker = useAnalyticsEventTracker('Contact us');

    if (!theme) {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#0E141C'
    } else {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#fff'
    }

    return (
        <>
        <Header />
        <div id="reg-cont" style={{ background: theme ? '#fff' : '#0E141C', padding: '60px 15px', paddingBottom: '2.5rem'}}>
            <h1 style={{color: theme ? '#000' : '#fff', textAlign: 'center'}} className={css.singin_heading}>Зареєструвати аккаунт</h1>

            <form className={css.form} style={{display:'flex', flexDirection: 'column', color: theme ? '#000' : '#fff'}} onSubmit={handleSubmit}>
                <label className={css.label}>
                    <span id='wrongMail'>Пошта</span>
                    <input id='wrongMailInp' className={css.input} onChange={(e) => setEmail(e.target.value)} name='email' type="email" autoComplete="new-password" required/>
                </label>
                <label className={css.label}>
                    <span>Логін</span>
                        <input className={css.input} onChange={(e) => setUserName(e.target.value)} name='userName' type="text" autoComplete="new-password" required />
                </label>
                <label className={css.label}>
                    <span>Пароль</span>
                        <input className={css.input} onChange={(e) => setPassword(e.target.value)} name='password' type="password" required />
                </label>
                <button className={css.reg_btn} type='submit'>Заруєструватись</button>
                <span style={{margin: '0 auto'}}>Вже є аккаунт? <Link className={css.link} to={'/login'}>Увійти</Link></span>
            </form>
            
        </div>
        
        <div id="success-cont" style={{ display: 'none', justifyContent: 'center', alignItems: 'center', marginTop: '60px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h2 style={{color: theme ? '#000' : '#fff'}}>Вітаємо! <br /> Реєстрація пройшла успішно <br /> <a target="_blank"  rel="noopener" className={css.link} href="https://mail.google.com/mail/u/">Перевірте вашу пошту для верифікації</a></h2>
                <Link className={css.reg_btn} to={'/login'}>Увійти</Link>
            </div>
        </div>
            
        <footer className={css.footer}>
            <div className={css.social_cont}>
                <a onClick={() => gaEventTracker('tg')} href="https://t.me/ukrainian_lol"><span className={css.social_link}><img width={20} src={require('../../images/tg.png')} alt="telegram" /> t.me/ukrainian_lol</span></a>
                <a onClick={() => gaEventTracker('email')} className={css.social_link} href="mailto:ukarainian.lol@ukr.net"><img width={20} src={require('../../images/mail.png')} alt="mail" /> ukarainian.lol@ukr.net</a>
            </div>
        </footer>
        </>
  );
}