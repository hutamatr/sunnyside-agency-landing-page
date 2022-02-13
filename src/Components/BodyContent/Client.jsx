import React from 'react';

import ClientContent from '../Data/ClientContent';

const Clients = () => {
  return (
    <section>
      <h2 className="font-fraunces my-16 text-center text-base tracking-[.25rem] text-slate-400">
        CLIENT TESTIMONIALS
      </h2>
      <ul className="flex flex-col gap-y-16">
        {ClientContent.map((client) => {
          return (
            <li className="flex flex-col items-center justify-center gap-y-6 px-5">
              <img
                src={client.image}
                alt=""
                className="w-[4.375rem] rounded-full"
              />
              <p className="text-center text-lg font-thin leading-relaxed text-slate-500">
                {client.desc}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <h2 className="font-fraunces">{client.name}</h2>
                <h4 className="text-sm text-slate-400">{client.jobs}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Clients;
