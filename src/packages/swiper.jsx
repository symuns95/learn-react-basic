import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// custom style
import "./swiperStyle.css";
// import Swiper core and required modules

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);



export default function SwiperCom() {



    return (
        <>
            <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                "clickable": true
            }} loop={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} centeredSlides={true} navigation={true} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    )
}