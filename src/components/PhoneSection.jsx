import React, { useContext, useState } from 'react'
import { AppSettingContext } from '../context/ThemeContext';
import screenImage from '../assets/Screens/Screen (4).png';
const PhoneSection = () => {

    const { appSetting, setAppSetting } = useContext(AppSettingContext);

    const [textData, setTextData] = useState({
        Title: {
            ar: "تسوق حسب الفئة",
            en: "Shop by Category"
        },
        Description: {
            ar: "استعرض تشكيلتنا الواسعة من المنتجات المتاحة لتلبية كل احتياجات متجرك.",
            en: "Browse our wide selection of available products to meet all your store's needs."
        }
    });

    return (
        <>
            <div className={`dark:bg-black  ${appSetting.IsDark && "dark"}`}>
                <div className='dark:bg-gradient-to-br  dark:from-[#000]  dark:via-gray-700  dark:to-[#000]'>
                    <div className="container mx-auto py-[50px] ">
                        <div className=' mx-auto  max-w-[1200px] px-3 ' >

                            <div className='flex flex-col md:flex-row md:items-start  items-center justify-between'>
                                <div className='justify-center items-center mt-28 ScrollEffectRight'>
                                    <h4 className={` text-3xl font-bold  pr-3 py-1 mb-7 border-[#f3c210] dark:text-white  ${appSetting.Language == ' ar' ? "border-r-4" : " border-l-4 text-left pl-3"}`}>{textData.Title[appSetting.Language]}</h4>
                                    <p className={`text-xl font-medium  pr-3 py-1 mb-7 border-[#f3c210] dark:text-white  ${appSetting.Language == 'ar' ? "border-r-4" : " border-l-4 text-left pl-3"}`} >{textData.Description[appSetting.Language]}</p>
                                </div>


                                <div className='mt-20 md:mt-0'>
                                    <div className='justify-center items-center ScrollEffectApper '>
                                        <div className=' w-[300px] h-[300px]   md:w-[600px] md:h-[600px] dark:border-white rounded-full border-4 border-red-950 flex justify-center items-center'>
                                            <div className='w-[200px] h-[200px]  md:w-[400px] md:h-[400px]   rounded-full border-8  border-[#f3c210]'>
                                                <img
                                                    className='mt-[-130px] w-[300px] mx-auto drop-shadow-2xl ScrollEffectRotate'
                                                    src={screenImage}
                                                    alt="Screen"
                                                />                                    </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhoneSection
