import React from 'react'
import Header from '../components/Header/Header'
import CategoriesOverview from '../components/CategoriesOverview'
import HeroSection from './../components/HeroSection';
import Features from '../components/Features';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer/Footer';
import PhoneSection from '../components/PhoneSection';
import RideEasy from '../components/RideEasy';
import Download from '../components/Download';
import Sponsers from './../components/Sponsers';
import PhoneSection2 from '../components/PhoneSection2';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <CategoriesOverview />
            <Features />
            <PhoneSection2 />
            <WhyChooseUs />
            <PhoneSection />
            <RideEasy />
            <Download />
            <Sponsers />
            <Footer />
        </>
    )
}

export default Home
