import React from 'react';
import NavBar from '../components/NavBar';
import Logo from '../assets/images/logoChe2.jpg'
import '../assets/styles/home.css'
import Menu from './Menu';

const Home = () => {
    return (
        <section className='home-container' id='home'>
            <NavBar />
            <div className='filter-image'></div>
            <div className='cheLogo'>
                <img src={Logo} alt=""/>
            </div>
            <Menu />

        </section>
    );
};

export default Home;