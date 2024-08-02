import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import LoreList from './LoreList/LoreList';
import LoreBanner from './LoreBanner/LoreBanner';

const LorePage = () => {

    return (
        <>
            <Header />
            <LoreBanner />
            <LoreList />
            <Footer />
        </>
    )
}

export default LorePage