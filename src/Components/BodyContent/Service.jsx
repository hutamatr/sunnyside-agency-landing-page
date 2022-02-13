import React from 'react';
import ServicesContent from '../Data/ServiceContent';

const Service = () => {
  return (
    <section>
      {ServicesContent.map((content) => {
        return (
          <div className="relative">
            <img src={content.image} alt="" />
            <div className="absolute top-[60%] z-50 flex flex-col items-center justify-center gap-y-6 p-6">
              <h1 className="font-fraunces text-3xl text-slate-700">
                {content.title}
              </h1>
              <p className="text-center text-xl text-slate-600">
                {content.paragraph}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Service;
