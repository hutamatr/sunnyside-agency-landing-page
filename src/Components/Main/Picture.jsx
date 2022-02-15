import React from 'react';
import PicturesData from '../Data/PicturesData';

const Pictures = () => {
  return (
    <section>
      <ul className="grid grid-cols-2 md:grid-cols-4">
        {PicturesData.map((picture, i) => {
          return (
            <li key={i}>
              <img
                src={picture.imageMobile}
                alt={`picturesMobile-${i + 1}`}
                className="md:hidden"
              />
              <img
                src={picture.imageDekstop}
                alt={`picturesDekstop-${i + 1}`}
                className="hidden md:block"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Pictures;
