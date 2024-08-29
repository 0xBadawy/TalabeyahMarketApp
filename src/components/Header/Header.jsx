import React, { useContext, useState } from "react";
import GetStarted from "../../button/GetStarted";
import { AppSettingContext } from "../../context/ThemeContext";

const Header = () => {

  //const { isDarkMode, toggleTheme } = useTheme();

  const { appSetting, setAppSetting } = useContext(AppSettingContext);


  const [NavLinks, setNavLinks] = useState([
    { title: { ar: "الرئيسة", en: "Home" }, link: "/" },
    { title: { ar: "عنا", en: "About" }, link: "/about" },
    { title: { ar: "الخدمات", en: "Services" }, link: "/services" },
    { title: { ar: "تواصل معنا", en: "Contact Us" }, link: "/contact" },
  ]);




  const HandelDark = () => {
    setAppSetting({ IsDark: !appSetting.IsDark });
  };

  const Navs = (Gap) => {
    return (
      <div className="mx-auto dark:text-white">
        <nav>
          <ul className={`flex items-center gap-10 font-medium`}>
            {NavLinks.map((item) => {
              return (<li className="hover:cursor-pointer hover:text-[#f9c921] duration-300" key={item.title.ar}><a>{item.title[appSetting.Language]}</a></li>)
            })}
          </ul>
        </nav>
      </div>
    );
  };

  return (
    <>

      <div className={`dark:bg-black ${appSetting.IsDark && "dark"} `}>

        <div className="pt-6 pb-4 shadow-md dark:bg-black" style={{ direction: appSetting.Language == 'ar' ? "rtl" : "ltr" }}>
          <div className="container mx-auto  max-w-[1200px]  px-3">
            <div className="flex items-center mx-auto  justify-between  ">
              <div>
                <img className="w-24" src="src/assets/Images/Logo.png" />
              </div >
              <div className="hidden md:block">
                {Navs(110)}
              </div>
              <div className="flex gap-2 items-center">
                <GetStarted Text={appSetting.Language == 'ar' ? "أبدأ الآن" : "Start Now"}   />


                <div className="mt-1" style={{ direction: "ltr" }}>

                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" onChange={() => { setAppSetting({ IsDark: !appSetting.IsDark }) }} value="" class="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    {/* <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Light</span> */}
                  </label>

                </div>
              </div>
            </div>
            <div className="items-center mt-3 mr-2 md:hidden">
              <hr className="mb-3" />

              {Navs(10)}
            </div>

          </div>
        </div>

      </div>

    </>
  );
};

export default Header;
