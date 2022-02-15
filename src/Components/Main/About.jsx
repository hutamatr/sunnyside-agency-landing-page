import React, { useState } from 'react';
import AboutData from '../Data/AboutData';
// import TransformDekstop from '../../assets/desktop/image-transform.jpg';
// import StandOutDekstop from '../../assets/desktop/image-stand-out.jpg';

const About = () => {
  // const [imageAbout, setImageAbout] = useState(false);
  return (
    <section id="About">
      {AboutData.map((content, i) => {
        return (
          <div key={i} className="grid sm:grid-cols-2">
            <img src={content.image} alt="" />
            <article
              className={`flex flex-col items-center justify-center gap-y-6 px-6 py-12  ${
                i % 2 === 0 ? 'sm:order-first' : ''
              }`}
            >
              <h1 className="font-fraunces text-center text-3xl text-veryDarkDesaturated">
                {content.title}
              </h1>
              <p className="text-center text-sm font-extralight leading-relaxed text-darkGrayish">
                {content.paragraph}
              </p>
              <a href="##" className="box">
                <h1
                  className="heading font-fraunces text-base text-slate-800
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
