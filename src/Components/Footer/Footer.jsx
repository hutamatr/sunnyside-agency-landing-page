import React from 'react';
import Sunnyside from '../../assets/logo-2.svg';
import Facebook from '../../assets/icon-facebook.svg';
import Instagram from '../../assets/icon-instagram.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Pinterest from '../../assets/icon-pinterest.svg';

const Footer = () => {
  const menus = ['About', 'Services', 'Project'];
  const socialMedia = [Facebook, Instagram, Twitter, Pinterest];
  return (
    <footer id="Contact">
      <section className="flex flex-col justify-center gap-y-8 bg-[#90D4C5] py-12">
        <img src={Sunnyside} alt="" className="mx-auto w-32" />
        <ul className="flex flex-row justify-around">
          {menus.map((menu, i) => {
            return (
              <li key={i}>
                <a href="##" className="text-sm text-darkModerateCyan">
                  {menu}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-row justify-center items-start gap-x-6 py-6">
          {socialMedia.map((social, i) => {
            return (
              <li key={i}>
                <a href="##">
                  <img src={social} alt={`social-${i + 1}`} className="w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
