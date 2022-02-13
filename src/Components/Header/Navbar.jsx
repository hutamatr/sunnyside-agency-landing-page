import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import hamburger from '../../assets/icon-hamburger.svg';
import arrow from '../../assets/icon-arrow-down.svg';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menus = ['About', 'Service', 'Project', 'Contact'];

  const showMenuHandler = () => {
    return !showMenu ? setShowMenu(true) : setShowMenu(false);
  };

  const menuShow = !showMenu ? (
    <a href="##" className="z-[999] inline-flex" onClick={showMenuHandler}>
      <img src={hamburger} alt="hamburger-maneu" className="h-4" />
    </a>
  ) : (
    <a
      href="##"
      className="absolute top-5 right-4 z-[999] cursor-pointer"
      onClick={showMenuHandler}
    >
      <MdClose className="text-3xl text-slate-500" />
    </a>
  );

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="ml-6 mr-6 flex h-14 max-w-4xl items-center justify-between pt-4">
        <img src={Logo} alt="Sunnyside" />
        {menuShow}
        <section
          className={`fixed top-0 z-50 h-full w-3/4 rounded-tl-md bg-white pt-16 pl-20 shadow-md duration-500 ${
            showMenu ? 'right-0' : '-right-full'
          }`}
        >
          <ul className="flex flex-col gap-y-6">
            {menus.map((menu, i) => {
              return (
                <li key={i}>
                  <a
                    href="##"
                    className="font-semibold text-slate-500 hover:text-slate-600"
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
        <img src={arrow} alt="arrow" className="w-9" />
      </div>
    </header>
  );
};

export default Navbar;
