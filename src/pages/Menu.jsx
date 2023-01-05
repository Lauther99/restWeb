import React from 'react';
import HighlightedText from '../components/HighlightedText';
import Slice from '../components/Slice';
import menuBg from '../assets/images/menuBg.jpeg'
import '../assets/styles/menu.css'

const Menu = () => {
    return (
        <section className='menu-container'>
            <div className='slogan-container'>
                <h1>
                    Desde el corazón de nuestro hogar
                    <HighlightedText
                        text={'hacia el tuyo . . .'}
                        colorText={'--main-color'}
                        bgColor={'--main-highlight-bg'}
                    />
                </h1>
            </div>
            <Slice
                title={'MENU'}
                mainText={'Disfrute de nuestra oferta actual de deliciosos platos, elaborados con ingredientes locales de nuestros amigos y vecinos.'}
                linkText={'Mira nuestro menú'}
                bgLink = {'--alt-highlight-bg'}
                colorLink = {'--light-color-text'}
                bgColorSlice={'--alt-bg-color'}
                bgImage={menuBg}
                routeLink={'/'}
                
            />

        </section>
    );
};

export default Menu;