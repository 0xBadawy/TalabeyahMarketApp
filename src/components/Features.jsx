 /* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import { FaBusinessTime, FaCalendarCheck } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { RxLapTimer } from "react-icons/rx";
import { BiSolidOffer } from "react-icons/bi";


import './style.css'
import { AppSettingContext } from '../context/ThemeContext';

const Features = () => {

    const ee0 = <RxLapTimer />;
    const ee1 = <BiSolidOffer />;
    const ee2 = <GiMoneyStack />;
    const ee3 = <GrDeliver />;

    const [icon0, setIcon0] = useState(ee0)
    const [icon1, setIcon1] = useState(ee1)
    const [icon2, setIcon2] = useState(ee2)
    const [icon3, setIcon3] = useState(ee3)

    const { appSetting, setAppSetting } = useContext(AppSettingContext);


    const [Data, setData] = useState([
        {
            icon: "",
            title: { ar: "توفير الوقت والجهد", en: "Save Time and Effort" },
            description: {
                ar: "تصفح واختر منتجاتك بسهولة، ونحن نتولى توصيلها إلى باب متجرك.",
                en: "Browse and choose your products easily, and we'll deliver them to your store's doorstep."
            }
        },
        {
            icon: "",
            title: { ar: "عروض يومية", en: "Daily Offers" },
            description: {
                ar: "استفد من خصومات يومية حصرية لتجارتك.",
                en: "Benefit from exclusive daily discounts for your business."
            }
        },
        {
            icon: "",
            title: { ar: "دفع آمن", en: "Secure Payment" },
            description: {
                ar: "خيارات دفع آمنة ومرنة تناسب احتياجاتك.",
                en: "Secure and flexible payment options that suit your needs."
            }
        },
        {
            icon: "",
            title: { ar: "تتبع الطلبات", en: "Order Tracking" },
            description: {
                ar: "تابع سير طلباتك من لحظة إتمام الطلب حتى وصوله إلى باب متجرك عبر خاصية التتبع المباشر.",
                en: "Track your orders from the moment they are placed until they arrive at your store via live tracking."
            }
        }
    ]);

    const [MainText, setMainText] = useState({
        Title: { ar: "لماذا تختار طلبية ماركت؟", en: "Why Choose Talabia Market?" },
        Description: {
            ar: "مميزات استثنائية تجعل تسوقك أسهل وأكثر فاعلية",
            en: "Exceptional features that make your shopping easier and more effective."
        }
    });

    return (
        <div className={`dark:bg-black  ${appSetting.IsDark && "dark"}`} style={{ direction: appSetting.Language == 'ar' ? "rtl" : "ltr" }}>
            <div className='dark:bg-gradient-to-bl  dark:from-[#000]  dark:via-gray-700  dark:to-[#000]'>
                
            <div className="container mx-auto py-44 " style={{ fontFamily: "Alexandria" }}>
                <div className='items-center justify-between mx-auto  max-w-[1200px] px-3' >
                    <div className='flex justify-between  gap-3 flex-col md:flex-row  items-center md:items-start'>
                        <div className='ScrollEffectRight ' >

                                <h4 className={`text-3xl font-semibold my-2 text-center  dark:text-white  ${appSetting.Language == 'ar' ? "md:text-right" : " md:text-left"}  `}>{MainText.Title[appSetting.Language]}   </h4>
                                <p className={`text-1xl font-semibold my-11 text-center  dark:text-white  ${appSetting.Language == 'ar' ? "md:text-right" : " md:text-left"}  `}>{MainText.Description[appSetting.Language]}</p>
                        </div>
                            <div className={`grid grid-cols-1 lg:grid-cols-2  ${appSetting.Language == ' ar' ? " gap-4 " : "  gap-10 "}  `}>
                            {Data.map((item, index) => {
                                return (
                                    <div key={index} className={`w-[320px] h-[320px] p-6 AnmationEffect ${index == 0 ? "bg-[#f3c210] dark:bg-[#d2b629]" : "bg-[#d8d8d8] dark:bg-[#353535]"}`}>
                                        <div className='text-6xl dark:text-white   '>{index == 0 ? icon0 : (index == 1 ? icon1 : index == 2 ? icon2 : index == 3 ? icon3 : "")}</div>
                                        <h1 className='text-2xl font-semibold my-10 dark:text-white '> {item.title[appSetting.Language]} </h1>
                                        <p className='font-semibold my-10 dark:text-white ' >{item.description[appSetting.Language]}</p>
                                    </div>
                                )
                            })}

                        </div>


                    </div>
                </div>
            </div>

            <br />

            </div>
        </div>
    )
}

export default Features
