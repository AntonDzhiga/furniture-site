import React, { useState } from 'react';
import style from "../style/gallery.module.css"
import image0 from '../assets/gallery/Bedroom/bedrooms_0.jpg';
import image1 from '../assets/gallery/Bedroom/bedrooms_1.jpg'; 
import image2 from '../assets/gallery/Bedroom/bedrooms_2.jpg'; 
import image3 from '../assets/gallery/Bedroom/bedrooms_3.jpg'; 


const GalleryBedroom = () => {
  const photos = [
    image0,
    image1,
    image2,
    image3,
    ];

  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]); // Встановлюємо перше фото як обране при завантаженні сторінки

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className={style.gallery_section}>
      <h2>Спальні</h2>
      <div className={style.gallery_container}>
  <div className={style.container_wrapper}>
    <div className={style.selected_photo}>
      <img src={selectedPhoto} alt={style.Selected} />
    </div>
    <div className={style.photos_container}>
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`${index}`}
          onClick={() => handlePhotoClick(photo)}
        />
      ))}
    </div>
  </div>
  </div>
</div>
  );
};


export default GalleryBedroom;
