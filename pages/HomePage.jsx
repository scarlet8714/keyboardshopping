import React from "react";
import Breakpoints from "../components/Breakpoints";
import HomePageCatgory from "../components/HomePageCatgory";
import HomePageCarousel from "../components/HomePageCarousel";
import { useQueries } from "@tanstack/react-query";
import { getcarousel, getProductCategory } from "../services/apiProduct";
import LoadingSpinner from "../components/LoadingSpinner";

export default function HomePage() {
  const data = useQueries({
    queries: [
      {
        queryKey: ["homepagekeyboard"],
        queryFn: () => getProductCategory("keyboard", 8),
      },
      {
        queryKey: ["homepagekeyboardset"],
        queryFn: () => getProductCategory("keyboardset", 8),
      },
      {
        queryKey: ["homepageswitch"],
        queryFn: () => getProductCategory("switch", 8),
      },
      {
        queryKey: ["homepagehat"],
        queryFn: () => getProductCategory("hat", 8),
      },
    ],
  });

  return (
    <>
      <HomePageCarousel />
      <Breakpoints padding={2}>
        {data.every((item, index, data) => item.isLoading === false) ? (
          <>
            <HomePageCatgory category="成品鍵盤" categoryItem={data[0]} />
            <HomePageCatgory category="鍵盤套件" categoryItem={data[1]} />
            <HomePageCatgory category="機械軸體" categoryItem={data[2]} />
            <HomePageCatgory category="鍵帽" categoryItem={data[3]} />
          </>
        ) : (
          <LoadingSpinner />
        )}
      </Breakpoints>
    </>
  );
}
