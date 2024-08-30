import React, { useContext, useState } from 'react'
import { AppSettingContext } from '../../context/ThemeContext';

const Footer = () => {
    const [socialMedia, setSocialMedia] = useState([
        { text: { en: "Facebook", ar: "فيسبوك" }, link: "https://www.facebook.com" },
        { text: { en: "Twitter", ar: "تويتر" }, link: "https://www.twitter.com" },
        { text: { en: "Instagram", ar: "إنستغرام" }, link: "https://www.instagram.com" }
    ]);

    const [footerLinks, setFooterLinks] = useState([
        { text: { en: "About Us", ar: "عنا" }, link: "#" },
        { text: { en: "Services", ar: "الخدمات" }, link: "#" },
        { text: { en: "Contact Us", ar: "تواصل معنا" }, link: "#" }
    ]);

    const { appSetting } = useContext(AppSettingContext);

    return (
        <>
            <div className={`dark:bg-black ${appSetting.IsDark && "dark"}`}>
                <div className='bg-slate-200 dark:bg-[#2c2b2b]'>

                    <footer className={`bg-white rounded-lg shadow dark:bg-[#000] text-white p-4 ${appSetting.IsDark ? 'dark' : ''}`}>
                        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                    <img
                                        style={{ filter: 'grayscale(100%)' }}
                                        src="src/assets/Images/Logo.png"
                                        className="h-8"
                                        alt="Logo"
                                    />
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                                </a>
                                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                    {footerLinks.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.link} className="hover:underline me-4 md:me-6">{link.text[appSetting.Language]}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                                © 2023 <a href="" className="hover:underline">Talabeyah Market</a> All Rights Reserved
                            </span>
                        </div>
                    </footer>

                </div>
            </div>
        </>
    )
}

export default Footer
