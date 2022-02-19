import React from "react";
import HomeImgMobile from "../../assets/mobile/image-header.jpg";
import HomeImageDesktop from "../../assets/desktop/image-header.jpg";

const Home = () => {
  return (
    <section id="Home">
      <img src={HomeImgMobile} alt="HomeImgMobile" className="md:hidden" />
      <img
        src={HomeImageDesktop}
        alt="HomeImageDesktop"
        className="hidden md:block"
      />
    </section>
  );
};

export default Home;
