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

import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import Breakpoints from "../components/Breakpoints";
import { useQueries } from "@tanstack/react-query";
import { getProduct, getProductImage } from "../services/apiProduct";
import Quantity from "../components/Quantity";
import ImageContainer from "../components/ImageContainer";

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
  const [focus, setFocus] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { pid } = useParams();
  const [content, image] = useQueries({
    queries: [
      {
        queryKey: ["product", pid],
        queryFn: () => getProduct(pid),
      },
      {
        queryKey: ["product", pid, "image"],
        queryFn: () => getProductImage(pid),
      },
    ],
  });
  function handleMinus() {
    setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1));
  }

  function handlePlus() {
    setQuantity((quantity) =>
      quantity >= content?.data?.[0].quantity ? 90 : quantity + 1
    );
  }
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
            {image?.data?.map((item, index) => (
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
            {image?.data?.map((item, index) => (
              <StyledSwiperSlideBottom key={index} color={index === focus}>
                <ImageContainer>
                  <img src={item.src} alt="" />
                </ImageContainer>
              </StyledSwiperSlideBottom>
            ))}
          </StyledSwiper>
        </Container>

        <Container>
          <h2 style={{ marginBottom: "3rem" }}>{content?.data?.[0].name}</h2>
          <div>
            <h3 style={{ display: "inline-block", marginRight: "2rem" }}>
              商品價格
            </h3>
            <h3
              style={{
                display: "inline-block",
                marginRight: "2rem",
                color: "red",
              }}
            >
              $ 930
            </h3>
          </div>
          <div>
            <Quantity
              handleMinus={handleMinus}
              handlePlus={handlePlus}
              quantity={quantity}
              remainQuantity={content?.data?.[0].quantity}
            />
          </div>
          <div style={{ width: "100%", display: "flex", marginTop: "3rem" }}>
            <div
              style={{
                flex: "0 0 50%",
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
                padding: "1rem 0",
                cursor: "pointer",
                marginRight: "1px",
              }}
            >
              加入購物車
            </div>
            <div
              style={{
                flex: "0 0 50%",
                backgroundColor: "#a88b47",
                color: "white",
                textAlign: "center",
                padding: "1rem 0",
                cursor: "pointer",
              }}
            >
              直接購買
            </div>
          </div>
        </Container>
      </ProductDetail>
      <Content>
        <StyledH3>【商品介紹】</StyledH3>
        <StyledParagraph style={{ whiteSpace: "pre-line" }}>
          {content?.data?.[0].content}
        </StyledParagraph>
        {image?.data?.map((item) => (
          <img src={item.src} alt="" style={{ width: "100%" }} />
        ))}
      </Content>
    </Breakpoints>
  );
}
