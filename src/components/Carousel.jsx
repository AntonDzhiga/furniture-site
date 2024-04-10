import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import style from '../style/carousel.module.css'
import 'swiper/css';
import 'swiper/css/pagination';
import firstImage from '../assets/gallery/1.jpg'
import secondImage from '../assets/gallery/2.jpg'
import thirdImage from '../assets/gallery/3.jpg'

const Carousel = () => {
    return (
        <div className={style.review_section}>
            <div className={style.review_carousel}>
                <Swiper spaceBetween={40}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}>
                    <SwiperSlide className={style.review_card} >
                        <div className={style.review_image}>
                            <img src={firstImage} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={style.review_card} >
                        <div className={style.review_image}>
                            <img src={secondImage} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={style.review_card} >
                        <div className={style.review_image}>
                            <img src={thirdImage} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Carousel;
