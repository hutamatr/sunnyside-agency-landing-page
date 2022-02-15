import React from 'react';
import MilkBottles from '../../assets/mobile/image-gallery-milkbottles.jpg';
import Orange from '../../assets/mobile/image-gallery-orange.jpg';
import Cone from '../../assets/mobile/image-gallery-cone.jpg';
import SugarCube from '../../assets/mobile/image-gallery-sugar-cubes.jpg';

const Pictures = () => {
  const pics = [MilkBottles, Orange, Cone, SugarCube];

  return (
    <section className="grid grid-cols-2">
      {pics.map((pic, i) => {
        return (
          <div key={i}>
            <img src={pic} alt={`pictures-${i + 1}`} />
          </div>
        );
      })}
    </section>
  );
};

export default Pictures;
