import React from 'react';
import GalleryKitchen from '../components/GalleryKitchen';
import GalleryWardrobes from '../components/GalleryWardrobes';
import GalleryBedroom from '../components/GalleryBedroom';
import GalleryChildRoom from '../components/GalleryChildRoom';
import GalleryOffice from '../components/GalleryOffice';
const Portfolio = () => {

  return (
    <div>
      <div>
      <GalleryKitchen/>
      <GalleryWardrobes/>
      <GalleryBedroom/>
      <GalleryChildRoom/>
      <GalleryOffice/>
      </div>
    </div>
  );
};

export default Portfolio;
