import React from 'react';

import ClientsData from '../Data/ClientsData';

const Clients = () => {
  return (
    <section id="Project">
      <h2 className="font-fraunces my-16 text-center text-base tracking-[.25rem] text-grayish">
        CLIENT TESTIMONIALS
      </h2>
      <ul className="mb-16 flex flex-col gap-y-16">
        {ClientsData.map((client, i) => {
          return (
            <li
              className="flex flex-col items-center justify-center gap-y-6 px-5"
              key={i}
            >
              <img
                src={client.image}
                alt=""
                className="w-[4.375rem] rounded-full"
              />
              <p className="text-center text-sm font-thin leading-relaxed text-veryDarkGrayish">
                {client.desc}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <h2 className="font-fraunces text-veryDarkDesaturated">
                  {client.name}
                </h2>
                <h4 className="text-sm text-grayish">{client.jobs}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Clients;
