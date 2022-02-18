import React from "react";

import ClientsData from "../Data/ClientsData";

const Clients = () => {
  return (
    <section
      id="Project"
      className="py-16 px-6 md:py-24 md:px-12 lg:py-32 lg:px-20"
    >
      <h2 className="font-fraunces text-grayish mb-16 text-center text-base tracking-[.25rem] lg:text-lg">
        CLIENT TESTIMONIALS
      </h2>
      <ul className="flex flex-col gap-y-16 md:flex-row">
        {ClientsData.map((client, i) => {
          return (
            <li
              className="mx-4 flex flex-col items-center justify-center gap-y-6 lg:gap-y-12"
              key={i}
            >
              <img
                src={client.image}
                alt=""
                className="w-[4.375rem] rounded-full"
              />
              <p className="text-veryDarkGrayish text-center text-sm font-thin leading-relaxed lg:text-lg">
                {client.desc}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <h2 className="font-fraunces text-veryDarkDesaturated lg:text-lg">
                  {client.name}
                </h2>
                <h4 className="text-grayish text-sm">{client.jobs}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Clients;
