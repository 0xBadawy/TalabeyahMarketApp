import React, { useContext, useState } from 'react'
import { AppSettingContext } from '../context/ThemeContext';
import './style.css'

const WhyChooseUs = () => {
    const [Title0, setTitle0] = useState({
        en: 'Why Choose "',
        ar: 'لماذا تختار "'
    });

    const [Title1, setTitle1] = useState({
        en: 'Talabia Market',
        ar: 'طلبية ماركت'
    });

    const [Title2, setTitle2] = useState({
        en: '"?',
        ar: '"؟'
    });

    const [Data, setData] = useState([
        {
            Number: "01",
            Title: { en: "High-Quality Products", ar: "منتجات عالية الجودة" },
            description: {
                en: "We collaborate with the best suppliers to offer high-quality products.",
                ar: "نتعاون مع أفضل الموردين لتقديم منتجات ذات جودة عالية."
            }
        },
        {
            Number: "02",
            Title: { en: "Excellent Customer Service", ar: "خدمة عملاء متميزة" },
            description: {
                en: "A professional support team is available 24/7 to serve you.",
                ar: "فريق دعم محترف متواجد على مدار الساعة لخدمتك."
            }
        },
        {
            Number: "03",
            Title: { en: "Fast and Secure Delivery", ar: "توصيل سريع وآمن" },
            description: {
                en: "We guarantee fast and secure delivery for all your orders.",
                ar: "نضمن لك توصيل سريع وآمن لكل طلباتك."
            }
        }
    ]);


    const { appSetting, setAppSetting } = useContext(AppSettingContext);



    return (
        <>
            <div className={`dark:bg-black  ${appSetting.IsDark && "dark"}`}>
                <div className='dark:bg-gradient-to-bl  dark:from-[#000]  dark:via-gray-700  dark:to-[#000]'>

                    <div className="container mx-auto py-[100px]  " style={{ fontFamily: "Alexandria" }}>
                        <div className='items-center mx-auto  max-w-[1200px] px-3' >
                            <div className='text-center '>
                                {
                                    appSetting.Language === 'en' ? (
                                        <h2 className='ScrollEffectApper text-3xl font-bold mb-20 dark:text-white'>
                                            {Title2[appSetting.Language]}
                                            {Title0[appSetting.Language]}
                                            <span className='text-[#f37c10]'>{Title1[appSetting.Language]}</span>
                                        </h2>
                                    ) : (
                                            <h2 className='ScrollEffectApper text-3xl font-bold mb-20 dark:text-white'>
                                                {Title0[appSetting.Language]}
                                                <span className='text-[#f37c10]'>{Title1[appSetting.Language]}</span>
                                                {Title2[appSetting.Language]}
                                            </h2>
                                    )
                                }
                            </div>
                            <div className='flex '>
                                <div className={`flex flex-col gap-4 md:flex-row md:gap-24 items-center  mx-auto ${appSetting.Language === 'ar' ? "text-right" :"text-left"} `}>
                                    {
                                        Data.map((item, index) => {
                                            return (

                                                <div key={index} className='bg-[#f3c210] w-[300px] h-[250px] px-6 ScrollEffectApper' >
                                                    <div className='text-[#ffffff] font-sans font-semibold text-[70px] '>{item.Number}</div>
                                                    <h1 className='text-xl font-bold my-2'> {item.Title[appSetting.Language]} </h1>
                                                    <p>{item.description[appSetting.Language]}</p>
                                                </div>


                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div></div></div>
        </>
    )
}

export default WhyChooseUs
