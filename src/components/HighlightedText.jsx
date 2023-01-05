import React from 'react';

const HighlightedText = ({ text, bgColor, colorText }) => {

    return (
        <div>
            <div className="highlight" style={{ backgroundColor: `var(${bgColor})`, color: `var(${colorText})` }}>
                {text}
            </div>
        </div>
    );
};

export default HighlightedText;