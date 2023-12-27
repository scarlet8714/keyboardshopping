// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getcarousel } from "../services/apiProduct";

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;

export default function App() {
  const navigate = useNavigate();
  const { data: carousel } = useQuery({
    queryKey: ["carousel"],
    queryFn: getcarousel,
  });
  function handleClick(pid) {
    navigate(`product/${pid}`);
  }
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {carousel?.map((item) => (
          <StyledSwiperSlide>
            <a href="productpage" onClick={(e) => e.preventDefault()}>
              <img
                src={item.src}
                alt=""
                onClick={() => handleClick(item.pid)}
              />
            </a>
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
