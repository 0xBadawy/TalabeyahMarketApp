import React, { useState } from "react";
import ButtonBlack from "../../button/ButtonBlack";
import ButtonWhite from "../../button/ButtonWhite";

const Header = () => {
  const [NavLinks, setNavLinks] = useState([
    { title: "الرئيسة", link: "/" },
    { title: "عنا", link: "/about" },
    { title: "الخدمات", link: "/contact" },
    { title: "تواصل معنا", link: "/services" },
  ]);
  return (
    <>
      <div>
        <div style={{ direction: "rtl" }} className="flex justify-between bg-white shadow-xl container w-3/5 items-center px-4 py-3 rounded-2xl fixed top-7 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center">
            <img
              className="w-9 pr-2 h-fit"
              src="src/assets/images/logo.png"
              alt=""
            />
            <h6>{"DoF3aa"}</h6>
          </div>
          <div>
            <nav>
              <ul className="flex gap-5">
                {NavLinks.map((link) => (
                  <li>
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex gap-2">
            <ButtonWhite Text="Login" />
            <ButtonBlack Text="Register" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
