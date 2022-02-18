import React from "react";
import ServicesData from "../Data/ServicesData";

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
                src={service.imageDesktop}
                alt={`imageDesktop-${i}`}
                className={`hidden md:block`}
              />

              <article className="absolute top-[65%] mb-10 flex flex-col items-center justify-center gap-y-4 px-4 md:-bottom-[1%] md:px-10 lg:gap-y-6 lg:px-40">
                <h1
                  className={`font-fraunces text-2xl  ${
                    i === 0 ? "text-darkDesaturatedCyan" : "text-darkBlue"
                  }`}
                >
                  {service.title}
                </h1>
                <p
                  className={`text-center text-sm leading-relaxed lg:text-base  ${
                    i === 0 ? "text-darkModerateCyan" : "text-darkBlue"
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
