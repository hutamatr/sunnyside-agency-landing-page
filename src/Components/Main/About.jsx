import React from "react";
import AboutData from "../Data/AboutData";
// import TransformDesktop from '../../assets/desktop/image-transform.jpg';
// import StandOutDesktop from '../../assets/desktop/image-stand-out.jpg';

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
              <h1 className="font-fraunces text-veryDarkDesaturated text-center text-3xl md:text-left lg:text-[2.5rem] lg:leading-tight">
                {content.title}
              </h1>
              <p className="text-darkGrayish text-center text-sm font-extralight leading-relaxed md:text-left lg:text-base">
                {content.paragraph}
              </p>
              <a href="##" className="box">
                <h1
                  className="heading font-fraunces text-base text-slate-800 md:text-sm
                "
                >
                  LEARN MORE
                </h1>
              </a>
            </article>
          </div>
        );
      })}
    </section>
  );
};

export default About;
