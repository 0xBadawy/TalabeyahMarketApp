import React, { useContext } from 'react'
import './style.css'
import { AppSettingContext } from '../context/ThemeContext';




const RideEasy = () => {
    const { appSetting, setAppSetting } = useContext(AppSettingContext);


    return (
        <>
            <div className={`dark:bg-black  ${appSetting.IsDark && "dark"}`}>
                <div className='bg-slate-200 dark:bg-[#2c2b2b]'>

                    <div className=' dark: py-10'>
                        <div className="container mx-auto my-[50px] mt-10 ">
                            <div className='dark:text-white items-center mx-auto  max-w-[1200px] px-3' >
                                <div className='mb-20 text-center '>
                                    <h5 className='font-semibold text-2xl ScrollEffectApper ' >كيفية بدء الاستخدام</h5>
                                </div>
                                <div className='flex justify-between flex-col md:flex-row '>
                                    <div className='w-full' style={{ direction: "ltr" }}>

                                        <div className='mb-8 ml-6 ScrollEffectRight'>
                                            <div className='w-[70px] h-[70px] rounded-full text-center pt-4 bg-[#f3c210] text-4xl font-mono font-semibold text-white'>1</div>
                                            <h4 className='my-5 border-l-4 pl-3 py-1 mb-7 border-[#f3c210] font-bold'>حمّل التطبيق</h4>
                                            <p>الخطوة الأولى نحو تحسين تجارتك تبدأ بتحميل تطبيق طلبية ماركت على هاتفك الذكي. سواء كنت تستخدم نظام Android أو iOS، يمكنك الوصول إلى التطبيق بسهولة.</p>
                                        </div>

                                        <div className='mb-8 ml-6 ScrollEffectRight'>
                                            <div className='w-[70px] h-[70px] rounded-full text-center pt-4 bg-[#f3c210] text-4xl font-mono font-semibold text-white'>2</div>
                                            <h4 className='my-5 border-l-4 pl-3 py-1 mb-7 border-[#f3c210] font-bold'>أنشئ حسابك</h4>
                                            <p>بعد تثبيت التطبيق، الخطوة التالية هي إنشاء حساب خاص بك لتتمكن من استكشاف جميع مميزات طلبية ماركت وتخصيص تجربتك حسب احتياجاتك.</p>
                                        </div>
                                    </div>

                                    <div className='mt-40 md:mt-20'>

                                        <div className='justify-center items-center'>
                                            <div className='w-[380px] h-[380px] rounded-full  bg-[#f3c210] flex justify-center items-center'>
                                                <img className='mt-[-30px] w-[300px] drop-shadow-2xl ScrollEffectApper' src="src/assets/Screens/IMG.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full'>



                                        <div className='mb-8 mr-6 ScrollEffectLeft mt-32 md:mt-0'>
                                            <div className='w-[70px] h-[70px] rounded-full text-center pt-4 bg-[#f3c210]  text-4xl font-mono font-semibold text-white'>3</div>
                                            <h4 className='my-5 border-r-4 pr-3 py-1 mb-7 border-[#f3c210] font-bold'>ابدأ التسوق</h4>
                                            <p>إضافة عنوان التوصيل يضمن وصول الطلبات إلى موقعك بدقة وسرعة. يمكنك إدخال عنوان واحد أو أكثر إذا كنت تدير عدة مواقع.</p>
                                        </div>

                                        <div className='mb-8 mr-6 ScrollEffectLeft'>
                                            <div className='w-[70px] h-[70px] rounded-full text-center pt-4 bg-[#f3c210]  text-4xl font-mono font-semibold text-white'>4</div>
                                            <h4 className='my-5 border-r-4 pr-3 py-1 mb-7 border-[#f3c210] font-bold'>توصيل الطلبات</h4>
                                            <p>بعد إعداد حسابك وعنوانك، يمكنك البدء في استعراض المنتجات المتاحة في تطبيق طلبية ماركت. استكشف الأقسام المختلفة واضف المنتجات التي تحتاجها إلى سلة التسوق.</p>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div></div></div>
        </>
    )
}

export default RideEasy
