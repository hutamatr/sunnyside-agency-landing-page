import React from 'react';
import AboutData from '../Data/AboutData';
// import TransformDekstop from '../../assets/desktop/image-transform.jpg';
// import StandOutDekstop from '../../assets/desktop/image-stand-out.jpg';

const About = () => {
  // const [imageAbout, setImageAbout] = useState(false);
  return (
    <section id="About">
      {AboutData.map((content, i) => {
        return (
          <div key={i} className="grid md:grid-cols-2">
            <img src={content.imageMobile} alt="" className="md:hidden" />
            <img
              src={content.imageDekstop}
              alt=""
              className="hidden md:block"
            />
            <article
              className={`flex flex-col items-center justify-center gap-y-6 px-6 py-12 md:items-start md:px-16 md:pl-18 md:pr-12 md:gap-y-4   ${
                i === 0 ? 'md:order-first' : ''
              }`}
            >
              <h1 className="font-fraunces text-center text-3xl text-veryDarkDesaturated md:text-left md:text-2xl">
                {content.title}
              </h1>
              <p className="text-center text-sm font-extralight leading-relaxed text-darkGrayish md:text-left">
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
