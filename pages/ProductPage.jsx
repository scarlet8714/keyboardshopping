import { useParams } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
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
const StyledSwiperSlideBottom = styled(SwiperSlide)`
  margin-top: auto;
  margin-bottom: auto;
  border: ${(props) =>
    props.color ? "1px solid #a88b47" : "1px solid #f6f6f6"};
`;

const Container = styled.div`
  flex: 0 0 auto;
  width: 50%;
  margin-right: ${(props) => props.margin || ""};
`;

const Content = styled.div`
  border: 1px solid #807d7d9e;
  padding: 2rem;
  margin: 2rem 0;
`;

const StyledH3 = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledParagraph = styled.p`
  line-height: 2.5rem;
`;

export default function ProductPage() {
  const swiper = useSwiper();
  const [focus, setFocus] = useState(0);
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

  function handleClick(index) {
    console.log(index);
    setFocus(index);
  }

  useEffect(
    function () {
      console.log(focus);
    },
    [focus]
  );

  return (
    <Breakpoints>
      <ProductDetail>
        <Container margin="2em">
          <StyledSwiper
            style={{
              "--swiper-navigation-color": "#8d898957",
              "--swiper-pagination-color": "#8d898957",
            }}
            loop={true}
            spaceBetween={10}
            initialSlide={0}
            navigation={true}
            init={false}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            onSlideChange={({ realIndex }) => setFocus(realIndex)}
            className="mySwiper2"
          >
            {image?.map((item, index) => (
              <StyledSwiperSlide key={index}>
                <img src={item.src} alt="" loading="lazy" />
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>

          <StyledSwiper
            onSwiper={setThumbsSwiper}
            loop={false}
            spaceBetween={10}
            slidesPerView={4}
            initialSlide={0}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {image?.map((item, index) => (
              <StyledSwiperSlideBottom key={index} color={index === focus}>
                <img src={item.src} alt="" />
              </StyledSwiperSlideBottom>
            ))}
          </StyledSwiper>
        </Container>
        <Container>
          <h2>{content?.[0].name}</h2>
        </Container>
      </ProductDetail>
      <Content>
        <StyledH3>【商品介紹】</StyledH3>
        <StyledParagraph style={{ whiteSpace: "pre-line" }}>
          {content?.[0].content}
        </StyledParagraph>
        {image?.map((item) => (
          <img src={item.src} alt="" style={{ width: "100%" }} />
        ))}
      </Content>
    </Breakpoints>
  );
}
