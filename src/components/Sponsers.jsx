import React, { useContext, useEffect, useState } from 'react'
import '../Style/styleSponsers.css';
import Item from './Item'; // Import the Item component
import { AppSettingContext } from '../context/ThemeContext';


const Sponsers = () => {

    const imageUrls = [
        'src/assets/sponsers/Sponser (1).jpg',
        'src/assets/sponsers/Sponser (2).png',
        'src/assets/sponsers/Sponser (3).png',
        'src/assets/sponsers/Sponser (4).png',
        'src/assets/sponsers/Sponser (5).png',
        'src/assets/sponsers/Sponser (6).png',
        'src/assets/sponsers/Sponser (7).png',
        'src/assets/sponsers/Sponser (8).png',


    ];




    const { appSetting, setAppSetting } = useContext(AppSettingContext);


    return (
        <>
            <div className={`dark:bg-black  ${appSetting.IsDark && "dark"}`}>
                <div className=' dark:bg-[#2c2b2b]'>
                    <div className=" mx-auto  py-36">
                        <div className='  ' >
                            <h4 className='text-3xl font-semibold my-2 dark:text-white text-center ScrollEffectApper'>شركاء النجاح</h4>
                            <div className="wrapper ScrollEffectApper ">

                                {
                                    imageUrls.map((url, i) => (
                                        <Item
                                            key={i}
                                            className={`item${i + 1}`}
                                            delay={`calc(30s / 8 * (${8 - (i + 1)}) * -1)`}
                                            imageSrc={url} />
                                    ))

                                }                                      
                            </div>




                        </div>
                    </div>    </div>
            </div>

        </>
    )
}

export default Sponsers
