import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import NewsBanner from "./NewsBanner/NewsBanner";
import NewsList from "./NewsList/NewsList";

const News = () => { 
    return (
        <>
            <Header />
            <NewsBanner />
            <NewsList />
            <Footer />
        </>
    )
}

export default News;