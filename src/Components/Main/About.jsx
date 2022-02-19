import React from "react";
import AboutData from "../Data/AboutData";

const About = () => {
  // const [imageAbout, setImageAbout] = useState(false);
  return (
    <section id="About">
      {AboutData.map((content, i) => {
        return (
          <div key={i} className="grid md:grid-cols-2">
            <img src={content.imageMobile} alt="" className="md:hidden" />
            <img
              src={content.imageDesktop}
              alt=""
              className="hidden md:block"
            />
            <article
              className={`flex flex-col items-center justify-center gap-y-6 px-8 py-16 md:items-start md:py-6 md:pl-10 md:pr-12 lg:gap-y-8 lg:pr-28 lg:pl-32  ${
                i === 0 ? "md:order-first" : ""
              }`}
            >
              <h1 className="text-center font-fraunces text-3xl text-veryDarkDesaturated md:text-left lg:text-[2.5rem] lg:leading-tight">
                {content.title}
              </h1>
              <p className="text-center text-sm font-extralight leading-relaxed text-darkGrayish md:text-left lg:text-base">
                {content.paragraph}
              </p>
              <a href="##" className="box">
                <h1
                  className="heading text-slate-800 font-fraunces text-base md:text-sm
                "
                >
                  LEARN MORE
                </h1>
              </a>
            </article>
            <div className=""></div>
          </div>
        );
      })}
    </section>
  );
};

export default About;
