import React, { useState } from 'react';
import style from "../style/gallery.module.css"
import image1 from '../assets/gallery/Wardrobes/closet_in_badroom_0.jpg';
import image2 from '../assets/gallery/Wardrobes/closet_in_badroom_1.jpg';
import image3 from '../assets/gallery/Wardrobes/closet_in_badroom_with_out_clothes3.jpg';
import image4 from '../assets/gallery/Wardrobes/closet_in_badroom_with_out_clothes_1.jpg';
import image5 from '../assets/gallery/Wardrobes/closet_in_badroom_with_out_clothes_2.jpg';
import image6 from '../assets/gallery/Wardrobes/closet_in_badroom_without_clothes_0.jpg';
import image7 from '../assets/gallery/Wardrobes/closet_in_room_after_montage_0.jpg';


const GalleryWardrobes = () => {
  const photos = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    ];

  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]); // Встановлюємо перше фото як обране при завантаженні сторінки

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className={style.gallery_section}>
      <h2>Шафи-купе</h2>
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

export default GalleryWardrobes;
