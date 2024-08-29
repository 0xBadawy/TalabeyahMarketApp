import React, { useContext, useState } from 'react'
import { AppSettingContext } from '../../context/ThemeContext';

const Footer = () => {

    const [SocialMedia, setSocialMedia] = useState([
        { Text: "فيسبوك", link: "https://www.facebook.com" },
        { Text: "تويتر", link: "https://www.twitter.com" },
        { Text: "إنستغرام", link: "https://www.instagram.com" }
    ])

    const [FooterLinks, setFooterLinks] = useState([]);


    const { appSetting, setAppSetting } = useContext(AppSettingContext);


    return (
        <>
            <div className={`dark:bg-black  ${appSetting.IsDark && "dark"}`}>
                <div className='bg-slate-200 dark:bg-[#2c2b2b]'>

                    <footer class="bg-white rounded-lg shadow dark:bg-[#000] text-white p-4">
                        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                            <div class="sm:flex sm:items-center sm:justify-between">
                                <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                    <img style={{ filter: 'grayscale(100%)' }}
                                        src="src/assets/Images/Logo.png" class="h-8" alt=" Logo" />
                                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                                </a>
                                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                    <li>
                                        <a href="#" class="hover:underline me-4 md:me-6">عنا</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline me-4 md:me-6">الخدمات</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline me-4 md:me-6">تواصل معنا</a>
                                    </li>

                                </ul>
                            </div>
                            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">Talabeyah Market</a> All Rights Reserved</span>
                        </div>
                    </footer>



                </div> </div> </>
    )
}

export default Footer
