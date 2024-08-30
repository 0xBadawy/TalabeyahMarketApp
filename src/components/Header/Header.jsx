import React, { useContext } from "react";
import GetStarted from "../../button/GetStarted";
import { AppSettingContext } from "../../context/ThemeContext";
import { MdLightMode, MdNightlightRound } from "react-icons/md";

const Header = () => {
  const { appSetting, setAppSetting } = useContext(AppSettingContext);

  const handleDark = () => {
    setAppSetting(prev => ({
      ...prev,
      IsDark: !prev.IsDark
    }));
    console.log("HandelDark", !appSetting.IsDark);
  };

  const NavLinks = [
    { title: { ar: "الرئيسة", en: "Home" }, link: "/" },
    { title: { ar: "عنا", en: "About" }, link: "/about" },
    { title: { ar: "الخدمات", en: "Services" }, link: "/services" },
    { title: { ar: "تواصل معنا", en: "Contact Us" }, link: "/contact" },
  ];

  const Navs = (Gap) => (
    <div className="mx-auto dark:text-white">
      <nav>
        <ul className={`flex items-center gap-10 font-medium`}>
          {NavLinks.map((item) => (
            <li className="hover:cursor-pointer hover:text-[#f9c921] duration-300" key={item.title.ar}>
              <a>{item.title[appSetting.Language]}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <div className={`dark:bg-black ${appSetting.IsDark ? "dark" : ""}`}>
      <div className="pt-6 pb-4 shadow-md dark:bg-black" style={{ direction: appSetting.Language === 'ar' ? "rtl" : "ltr" }}>
        <div className="container mx-auto max-w-[1200px] px-3">
          <div className="flex items-center mx-auto justify-between">
            <div>
              <img className="w-24" src="src/assets/Images/Logo.png" alt="Logo" />
            </div>
            <div className="hidden md:block">
              {Navs(110)}
            </div>
            <div className="flex gap-2 items-center">
              <GetStarted Text={appSetting.Language === 'ar' ? "أبدأ الآن" : "Start Now"} />
              <div className=" " style={{ direction: "ltr" }}>
                <button onClick={handleDark} className={`focus:outline-none rounded-md border-2 p-[6px] ${appSetting.IsDark ? "text-[#FFF] border-white" : "text-[#ed950d] border-[#ed950d]"} `}>
                  {appSetting.IsDark ? <MdLightMode /> : <MdNightlightRound />}
                </button>
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
  );
};

export default Header;
