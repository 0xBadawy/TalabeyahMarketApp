import React, { useContext, useState } from 'react'
import './style.css'
import { AppSettingContext } from '../context/ThemeContext';

const RideEasy = () => {
    const { appSetting, setAppSetting } = useContext(AppSettingContext);

    // Define the state for text content
    const [texts, setTexts] = useState({
        title: {
            en: 'How to Get Started',
            ar: 'كيفية بدء الاستخدام'
        },
        steps: [
            {
                number: '1',
                heading: {
                    en: 'Download the App',
                    ar: 'حمّل التطبيق'
                },
                description: {
                    en: 'The first step towards enhancing your business begins with downloading the Talabia Market app on your smartphone. Whether you use Android or iOS, you can easily access the app.',
                    ar: 'الخطوة الأولى نحو تحسين تجارتك تبدأ بتحميل تطبيق طلبية ماركت على هاتفك الذكي. سواء كنت تستخدم نظام Android أو iOS، يمكنك الوصول إلى التطبيق بسهولة.'
                }
            },
            {
                number: '2',
                heading: {
                    en: 'Create Your Account',
                    ar: 'أنشئ حسابك'
                },
                description: {
                    en: 'After installing the app, the next step is to create your account so you can explore all the features of Talabia Market and customize your experience according to your needs.',
                    ar: 'بعد تثبيت التطبيق، الخطوة التالية هي إنشاء حساب خاص بك لتتمكن من استكشاف جميع مميزات طلبية ماركت وتخصيص تجربتك حسب احتياجاتك.'
                }
            },
            {
                number: '3',
                heading: {
                    en: 'Start Shopping',
                    ar: 'ابدأ التسوق'
                },
                description: {
                    en: 'Adding a delivery address ensures that your orders are accurately and quickly delivered to your location. You can enter one or more addresses if you manage multiple locations.',
                    ar: 'إضافة عنوان التوصيل يضمن وصول الطلبات إلى موقعك بدقة وسرعة. يمكنك إدخال عنوان واحد أو أكثر إذا كنت تدير عدة مواقع.'
                }
            },
            {
                number: '4',
                heading: {
                    en: 'Order Delivery',
                    ar: 'توصيل الطلبات'
                },
                description: {
                    en: 'After setting up your account and address, you can start browsing the available products in the Talabia Market app. Explore different categories and add the products you need to your shopping cart.',
                    ar: 'بعد إعداد حسابك وعنوانك، يمكنك البدء في استعراض المنتجات المتاحة في تطبيق طلبية ماركت. استكشف الأقسام المختلفة واضف المنتجات التي تحتاجها إلى سلة التسوق.'
                }
            }
        ]
    });


    return (
        <>
            <div className={`dark:bg-black  ${appSetting.IsDark && "dark"}`} style={{ direction: appSetting.Language == 'ar' ? "rtl" : "ltr" }}>
                <div className='bg-slate-200 dark:bg-[#2c2b2b]'>
                    <div className='dark: py-10'>
                        <div className="container mx-auto my-[50px] mt-10 ">
                            <div className='dark:text-white items-center mx-auto max-w-[1200px] px-3' >
                                <div className='mb-20 text-center '>
                                    <h5 className='font-semibold text-2xl ScrollEffectApper'>{texts.title[appSetting.Language]}</h5>
                                </div>
                                <div className='flex justify-between flex-col md:flex-row '>
                                    <div className='w-full' style={{ direction: appSetting.Language == 'en' ? "rtl" : "ltr" }}>
                                        {texts.steps.slice(0, 2).map((step, index) => (
                                            <div key={index} className='mb-8 ml-6 ScrollEffectRight'>
                                                <div className='w-[70px] h-[70px] rounded-full text-center pt-4 bg-[#f3c210] text-4xl font-mono font-semibold text-white'>{step.number}</div>
                                                <h4 className={`my-5 pl-3 py-1 mb-7 border-[#f3c210] font-bold ${appSetting.Language == 'ar' ? " border-l-4 " : " border-r-4 pr-3 "} `}>{step.heading[appSetting.Language]}</h4>
                                                <p>{step.description[appSetting.Language]}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className='mt-40 md:mt-20'>
                                        <div className='justify-center items-center'>
                                            <div className='w-[380px] h-[380px] rounded-full bg-[#f3c210] flex justify-center items-center'>
                                                <img className='mt-[-30px] w-[300px] drop-shadow-2xl ScrollEffectApper' src="src/assets/Screens/IMG.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full'>
                                        {texts.steps.slice(2).map((step, index) => (
                                            <div key={index} className='mb-8 mr-6 ScrollEffectLeft mt-32 md:mt-0'>
                                                <div className='w-[70px] h-[70px] rounded-full text-center pt-4 bg-[#f3c210] text-4xl font-mono font-semibold text-white'>{step.number}</div>
                                                <h4 className={`my-5  pr-3 py-1 mb-7 border-[#f3c210] font-bold ${appSetting.Language == 'en' ? " border-l-4 pl-3 " : " border-r-4  "} `}>{step.heading[appSetting.Language]}</h4>
                                                <p>{step.description[appSetting.Language]}</p>
                                            </div>
                                        ))}
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

export default RideEasy
