import React, { useContext } from 'react'
import GetStarted from '../button/GetStarted'
import ButtonBlack from '../button/ButtonBlack'
import './style.css'
import { AppSettingContext } from '../context/ThemeContext'

const Download = () => {
    const { appSetting, setAppSetting } = useContext(AppSettingContext);


    return (
        <>
            <div className={`dark:bg-black  ${appSetting.IsDark && "dark"}`}>
                <div className=' dark:bg-[#2c2b2b]'>
                    <div className="container mx-auto py-[50px] ">
                        <div className='items-center justify-between mx-auto  max-w-[1200px] px-3 ' >
                            <div className='w-full bg-[#f9c921] md:h-[500px] rounded-3xl flex flex-col md:flex-row' >

                                <div className='w-full p-20 ScrollEffectRight'>
                                    <h6 className='text-[40px] font-semibold'>حمل الان</h6>
                                    <p className='text mt-12 mb-20  font-normal'>مع تطبيق طلبية ماركت، يمكن لتجارتك أن تنمو وتزدهر بشكل أسرع وأسهل. حمّل التطبيق الآن واستمتع بتجربة تسوق سلسة وآمنة لجميع احتياجات متجرك. اختر من بين مجموعة واسعة من المنتجات الغذائية عالية الجودة ووفر الوقت والجهد عبر الطلب من مكان واحد.</p>
                                    <div className='flex flex-row-reverse'>
                                        <ButtonBlack Text="Download" />
                                    </div>
                                </div>
                                <div className='w-full hidden overflow-hidden md:flex ScrollEffectLeft'>
                                    <img className='h-[400px] mt-[250px] ' src="src/assets/Screens/IMG.png" alt="" />
                                    <img className='h-[400px] mt-[-200px] ScrollEffectButton' src="src/assets/Screens/Screen (2).png" alt="" />

                                </div>
                            </div>
                        </div>
                    </div></div></div>
        </>
    )
}

export default Download
