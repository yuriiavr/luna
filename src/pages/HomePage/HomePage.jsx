import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import Banner from "../../components/Home/Banner/Banner"
import Cyber from "../../components/Home/Cyber/Cyber"
import BannerNews from "../../components/Home/News/BannerNews"
import Patch from "../../components/Home/Patch/Patch"
import Slider from "../../components/Home/Slider/Slider"
import css from "./HomePage.module.css"

const HomePage = () =>{
    return (
        <div className={css.mainCont}>
            <Header />
            <Banner />
            <BannerNews />
            <Patch />
            <Slider />
            <Cyber />
            <Footer />
        </div>
    )
}

export default HomePage