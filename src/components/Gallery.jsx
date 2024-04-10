import React, { useState } from 'react';
import style from "../style/gallery.module.css"


const GalleryBedroom = (props) => {
    const [selectedPhoto, setSelectedPhoto] = useState(props.photos[0]); // Встановлюємо перше фото як обране при завантаженні сторінки

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    return (
        <div className={style.gallery_section}>
            <h2>{props.galleryName}</h2>
            <div className={style.gallery_container}>
                <div className={style.selected_photo}>
                    <img src={selectedPhoto} alt={style.Selected} />
                </div>
                <div className={style.photos_container}>
                    {props.photos.map((photo, index) => (
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
    );
};


export default GalleryBedroom;
