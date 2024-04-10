import React from 'react';
import Gallery from "../components/Gallery";
import * as GalleryPhotos from '../assets/gallery'

const Portfolio = () => {
    const kitchenPhotos = [
        GalleryPhotos.KitchenPhotos.Kitchen_in_apartment_0,
        GalleryPhotos.KitchenPhotos.Kitchen_in_apartment_1,
        GalleryPhotos.KitchenPhotos.Kitchen_in_apartment_2,
        GalleryPhotos.KitchenPhotos.Kitchen_in_apartment_3,
        GalleryPhotos.KitchenPhotos.Kitchen_in_apartment_4,
        GalleryPhotos.KitchenPhotos.Kitchen_in_apartment_5
    ];
    const wardrobesPhotos = [
        GalleryPhotos.WardrobePhotos.wardrobe_0,
        GalleryPhotos.WardrobePhotos.wardrobe_1,
        GalleryPhotos.WardrobePhotos.wardrobe_2,
        GalleryPhotos.WardrobePhotos.wardrobe_3,
        GalleryPhotos.WardrobePhotos.wardrobe_4,
        GalleryPhotos.WardrobePhotos.wardrobe_5,
        GalleryPhotos.WardrobePhotos.wardrobe_6,
        GalleryPhotos.WardrobePhotos.wardrobe_7
    ];
    const bedroomPhotos = [
        GalleryPhotos.BedroomPhotos.bedrooms_0,
        GalleryPhotos.BedroomPhotos.bedrooms_1,
        GalleryPhotos.BedroomPhotos.bedrooms_2,
        GalleryPhotos.BedroomPhotos.bedrooms_3
    ];
    const childRoomPhotos = [
        GalleryPhotos.ChildRoomPhotos.childrens_rooms_0,
        GalleryPhotos.ChildRoomPhotos.childrens_rooms_1,
        GalleryPhotos.ChildRoomPhotos.childrens_rooms_2,
        GalleryPhotos.ChildRoomPhotos.childrens_rooms_3,
        GalleryPhotos.ChildRoomPhotos.childrens_rooms_4
    ]
    const officePhotos = [
        GalleryPhotos.OfficePhotos.offices_1,
        GalleryPhotos.OfficePhotos.offices_2,
        GalleryPhotos.OfficePhotos.offices_3,
        GalleryPhotos.OfficePhotos.offices_4,
        GalleryPhotos.OfficePhotos.offices_5,
        GalleryPhotos.OfficePhotos.offices_6,
        GalleryPhotos.OfficePhotos.offices_7,
        GalleryPhotos.OfficePhotos.offices_8,
        GalleryPhotos.OfficePhotos.offices_9
    ];

  return (
    <div>
      <div>
      <Gallery galleryName={'Кухні'} photos={kitchenPhotos}/>
      <Gallery galleryName={'Шафи'}  photos={wardrobesPhotos}/>
      <Gallery galleryName={'Спальні'} photos={bedroomPhotos}/>
      <Gallery galleryName={'Дитячі'} photos={childRoomPhotos}/>
      <Gallery galleryName={'Офіси'} photos={officePhotos}/>
      </div>
    </div>
  );
};

export default Portfolio;
