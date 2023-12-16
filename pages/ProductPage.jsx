import { useParams } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import styled from "styled-components";
import { useEffect } from "react";
import Breakpoints from "../components/Breakpoints";
import supabase from "../services/supabase";

const ProductDetail = styled.div`
  display: flex;
`;

const StyledSwiper = styled(Swiper)`
  img {
    width: 100%;
  }
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  margin-top: auto;
  margin-bottom: auto;
`;

const Container = styled.div`
  flex: 0 0 auto;
  width: 50%;
  margin-right: ${(props) => props.margin || ""};
`;

export default function ProductPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [content, setContent] = useState(null);
  const [image, setImage] = useState(null);
  const { pid } = useParams();
  useEffect(
    function () {
      async function getData() {
        const { data, error } = await supabase
          .from("product")
          .select()
          .eq("id", pid);
        setContent(data);
      }
      getData();
    },
    [pid]
  );
  useEffect(
    function () {
      async function getImage() {
        const { data, error } = await supabase
          .from("image")
          .select()
          .eq("pid", pid)
          .eq("recommend", false);
        setImage(data);
      }
      getImage();
    },
    [pid]
  );
  useEffect(
    function () {
      console.log(image);
    },
    [image]
  );

  return (
    <Breakpoints>
      <ProductDetail>
        <Container margin="2em">
          <StyledSwiper
            style={{
              "--swiper-navigation-color": "#8d8989",
              "--swiper-pagination-color": "#8d8989",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {image?.map((item) => (
              <StyledSwiperSlide>
                <img src={item.src} alt="" />
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>

          <StyledSwiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {image?.map((item) => (
              <StyledSwiperSlide>
                <img src={item.src} alt="" />
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </Container>
        <Container>
          <h1>{content?.[0].name}</h1>
        </Container>
      </ProductDetail>
      <p style={{ whiteSpace: "pre-line" }}>{content?.[0].content}</p>
      {image?.map((item) => (
        <img src={item.src} alt="" style={{ width: "100%" }} />
      ))}
    </Breakpoints>
  );
}
