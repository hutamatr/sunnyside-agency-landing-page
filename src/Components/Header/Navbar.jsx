import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import arrow from "../../assets/icon-arrow-down.svg";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menus = ["About", "Service", "Project", "Contact"];

  const showMenuHandler = () => {
    !showMenu ? setShowMenu(true) : setShowMenu(false);
  };

  const clickMenuHandler = () => {
    setShowMenu(false);
  };

  const menuShow = !showMenu ? (
    <a
      href="##"
      className="z-[999] inline-flex md:hidden"
      onClick={showMenuHandler}
    >
      <img src={hamburger} alt="hamburger-menu" />
    </a>
  ) : (
    <a
      href="##"
      className="absolute top-5 right-5 z-[999] cursor-pointer md:hidden"
      onClick={showMenuHandler}
    >
      <MdClose className="text-3xl text-white" />
    </a>
  );

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="ml-6 mr-6 flex h-14 max-w-4xl items-center justify-between pt-4">
        <a href="#Home">
          <img src={Logo} alt="Sunnyside" className="md:w-44" />
        </a>

        {menuShow}
        <section
          className={`fixed top-[13%] z-[999] w-[85%] rounded-sm rounded-tr-none bg-white py-8 shadow-md duration-500 md:absolute md:left-[60%] md:-top-[5%] md:w-[30%] md:bg-opacity-0 md:shadow-none lg:left-[70%] lg:-top-[3%] ${
            showMenu ? "right-[8%]" : "-right-full"
          }`}
        >
          <div className="triangle md:hidden"></div>
          <ul className="flex flex-col items-center justify-center gap-y-6 md:flex-row md:gap-x-8">
            {menus.map((menu, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    i === 3
                      ? "bg-yellowSun font-fraunces rounded-full py-3 px-7 text-sm uppercase md:bg-white"
                      : ""
                  }`}
                >
                  <a
                    href={`#${menu}`}
                    className={`hover:text-veryDarkGrayish font-normal ${
                      i === 3
                        ? "text-veryDarkDesaturated"
                        : "text-darkGrayish md:text-white"
                    }`}
                    onClick={clickMenuHandler}
                  >
                    {menu}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </nav>

      <div className="mt-8 flex flex-col items-center justify-center gap-y-6 overflow-hidden">
        <h1 className="font-fraunces mb-10 mt-4 text-center text-4xl tracking-widest text-white lg:mt-20 lg:mb-16 lg:text-6xl">
          WE ARE CREATIVES
        </h1>
        <img src={arrow} alt="arrow" className="w-9" />
      </div>
    </header>
  );
};

export default Navbar;
