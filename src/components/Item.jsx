import React from 'react';
import '../Style/styleSponsers.css';


const Item = ({ className, delay, imageSrc }) => {
    return (
        <div
            className={`item ${className} `}
            style={{ animationDelay: delay, backgroundImage: `` }}

        >
            <img className='object-scale-down w-[70%] mx-auto' src={imageSrc} alt="" />
        </div>
    );
};

export default Item;