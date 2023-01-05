import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/slice.css'
import HighlightedText from './HighlightedText';

const Slice = ({ title, bgImage, mainText, linkText, routeLink, bgLink, colorLink, bgColorSlice}) => {
    return (
        <article className='slice-container' >
            <div className='image-slice' style={{ backgroundImage: `url(${bgImage})` }}>
                <div className='filter-slice'>
                    <h1><u>{title}</u></h1>
                </div>
            </div>
            <div className='details-slice' style={{ backgroundColor: `var(${bgColorSlice})` }}>
                <p>{mainText}</p>
                <Link to={routeLink}>
                    <HighlightedText
                        text={linkText}
                        bgColor={bgLink}
                        colorText={colorLink}
                    />
                </Link>
            </div>
        </article>
    );
};

export default Slice;