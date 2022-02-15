import React from 'react';
import ServicesData from '../Data/ServicesData';
// import GraphicDesignDekstop from '../../assets/desktop/image-graphic-design.jpg';
// import PhotographyDekstop from '../../assets/desktop/image-photography.jpg';

const Service = () => {
  return (
    <section id="Service">
      <ul className="grid md:grid-cols-2">
        {ServicesData.map((service, i) => {
          return (
            <li key={i} className="relative">
              <img
                src={service.imageMobile}
                alt={`imageMobile-${i}`}
                className="md:hidden"
              />

              <img
                src={service.imageDekstop}
                alt={`imageDekstop-${i}`}
                className={`hidden md:block`}
              />

              <article className="absolute top-[60%]  mb-6 flex flex-col items-center justify-center gap-y-4 p-4">
                <h1
                  className={`font-fraunces text-2xl  ${
                    i === 0 ? 'text-darkDesaturatedCyan' : 'text-darkBlue'
                  }`}
                >
                  {service.title}
                </h1>
                <p
                  className={`text-center text-sm leading-relaxed  ${
                    i === 0 ? 'text-darkModerateCyan' : 'text-darkBlue'
                  }`}
                >
                  {service.paragraph}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Service;
