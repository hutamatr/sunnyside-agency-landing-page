import React from 'react';
import Sunnyside from '../../assets/logo-2.svg';
import Facebook from '../../assets/icon-facebook.svg';
import Instagram from '../../assets/icon-instagram.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Pinterest from '../../assets/icon-pinterest.svg';
import Love from '../../assets/love.svg';

const Footer = () => {
  const menus = ['About', 'Service', 'Project'];
  const socialMedia = [Facebook, Instagram, Twitter, Pinterest];
  return (
    <footer id="Contact">
      <section className="flex flex-col justify-center gap-y-8 bg-[#90D4C5] py-12">
        <a href="#Home">
          <img src={Sunnyside} alt="" className="mx-auto w-32 lg:w-44" />
        </a>

        <ul className="flex flex-row justify-around md:justify-center md:gap-x-12">
          {menus.map((menu, i) => {
            return (
              <li key={i}>
                <a
                  href={`#${menu}`}
                  className="text-base text-darkModerateCyan lg:text-lg"
                >
                  {menu}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-row justify-center gap-x-6 py-6">
          {socialMedia.map((social, i) => {
            return (
              <li key={i}>
                <a href="##">
                  <img
                    src={social}
                    alt={`social-${i + 1}`}
                    className="w-4 lg:w-5"
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <div class="flex flex-row text-xs justify-center items-center gap-x-1 text-darkModerateCyan md:text-sm">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
            className="text-darkDesaturatedCyan"
          >
            Frontend Mentor
          </a>
          . Made with <img src={Love} class="w-4" alt="" /> by
          <a
            href="https://twitter.com/huutamatr"
            target="_blank"
            rel="noreferrer"
            className="text-darkDesaturatedCyan"
          >
            hutamatr
          </a>
          .
        </div>
      </section>
    </footer>
  );
};

export default Footer;
