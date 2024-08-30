import React, { useContext, useEffect, useState } from 'react'
import '../Style/styleSponsers.css';
import Item from './Item'; // Import the Item component
import { AppSettingContext } from '../context/ThemeContext';

import Sponser1 from '../assets/sponsers/Sponser (1).jpg';
import Sponser2 from '../assets/sponsers/Sponser (2).png';
import Sponser3 from '../assets/sponsers/Sponser (3).png';
import Sponser4 from '../assets/sponsers/Sponser (4).png';
import Sponser5 from '../assets/sponsers/Sponser (5).png';
import Sponser6 from '../assets/sponsers/Sponser (6).png';
import Sponser7 from '../assets/sponsers/Sponser (7).png';
import Sponser8 from '../assets/sponsers/Sponser (8).png';
const Sponsers = () => {

    const imageUrls = [
        Sponser1,
        Sponser2,
        Sponser3,
        Sponser4,
        Sponser5,
        Sponser6,
        Sponser7,
        Sponser8,
    ];

    const { appSetting, setAppSetting } = useContext(AppSettingContext);


    return (
        <>
            <div className={`dark:bg-black  ${appSetting.IsDark && "dark"}`}>
                <div className=' dark:bg-[#2c2b2b]'>
                    <div className=" mx-auto  py-36">
                        <div className='  ' >
                            <h4 className='text-3xl font-semibold my-2 dark:text-white text-center ScrollEffectApper'>{appSetting.Language == ' ar' ? "شركاء النجاح" : " Partners of Success"}</h4>
                            <div className="wrapper ScrollEffectApper">
                                {imageUrls.map((imageSrc, i) => (
                                    <Item
                                        key={i}
                                        className={`item${i + 1}`}
                                        delay={`calc(30s / 8 * (${8 - (i + 1)}) * -1)`}
                                        imageSrc={imageSrc} />
                                ))}
                            </div>


                        </div>
                    </div>    </div>
            </div>

        </>
    )
}

export default Sponsers
