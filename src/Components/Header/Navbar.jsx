import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import hamburger from '../../assets/icon-hamburger.svg';
import arrow from '../../assets/icon-arrow-down.svg';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menus = ['About', 'Service', 'Project', 'Contact'];

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
      <img src={hamburger} alt="hamburger-manu" />
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
          <img src={Logo} alt="Sunnyside" />
        </a>

        {menuShow}
        <section
          className={`fixed top-[13%] z-[999] w-[85%] rounded-sm rounded-tr-none bg-white shadow-md duration-500 py-8 md:absolute md:left-[30%] md:-top-[5%] md:bg-opacity-0 md:shadow-none lg:left-[40%] ${
            showMenu ? 'right-[8%]' : '-right-full'
          }`}
        >
          <div className="triangle md:hidden"></div>
          <ul className="flex flex-col gap-y-6 justify-center items-center md:flex-row md:gap-x-8">
            {menus.map((menu, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    i === 3
                      ? 'bg-yellowSun uppercase py-3 px-7 rounded-full font-fraunces text-sm md:bg-white'
                      : ''
                  }`}
                >
                  <a
                    href={`#${menu}`}
                    className={`font-normal hover:text-veryDarkGrayish ${i === 3 ? 'text-veryDarkDesaturated' : 'text-darkGrayish md:text-white'}`}
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
        <h1 className="font-fraunces mb-10 mt-4 text-center text-4xl tracking-widest text-white">
          WE ARE <br /> CREATIVES
        </h1>
        <img src={arrow} alt="arrow" className="w-9 overflow-hidden" />
      </div>
    </header>
  );
};

export default Navbar;
