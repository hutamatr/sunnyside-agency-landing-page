import React from 'react';
import AboutContent from '../Data/AboutContent';

const About = () => {
  return (
    <section className="">
      {AboutContent.map((content) => {
        return (
          <>
            <img src={content.image} alt="" />
            <article className="flex flex-col items-center justify-center gap-y-6 px-6 py-12">
              <h1 className="font-fraunces text-center text-3xl">
                {content.title}
              </h1>
              <p className="text-center text-slate-400">{content.paragraph}</p>
              <button>LEARN MORE</button>
            </article>
          </>
        );
      })}
    </section>
  );
};

export default About;
