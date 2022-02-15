import React from 'react';
import ServicesData from '../Data/ServicesData';

const Service = () => {
  return (
    <section id="Service">
      {ServicesData.map((service, i) => {
        return (
          <div className="relative" key={i}>
            <img src={service.image} alt="" />
            <div className="absolute top-[60%] z-50 mb-6 flex flex-col items-center justify-center gap-y-4 p-4">
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
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Service;
