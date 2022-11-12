import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Box } from "@chakra-ui/react";



const CardSlider = ({ cardData, Card, breakpoints}) => {
  return (
    <Box>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {cardData?.map((elem) => (
          <SwiperSlide key={elem.id} >
            <Card {...elem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CardSlider;