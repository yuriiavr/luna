import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import css from './CyberPage.module.css'
import CyberList from './CyberList/CyberList';
import CyberBanner from './CyberBanner/CyberBanner';


const CyberPage = () => {

    return (
        <>
            <Header />
            <CyberBanner />
            <CyberList />
            <Footer />
        </>
    )
}

export default CyberPage