import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import AddCartPopup from "../components/AddCartPopup";
import Breakpoints from "../components/Breakpoints";
import LoadingSpinner from "../components/LoadingSpinner";
import Overlay from "../components/Overlay";
import ProductItem from "../components/ProductItem";
import { getProductCategory } from "../services/apiProduct";

const Container = styled.div`
  ${(props) =>
    props.isloading
      ? css`
          display: block;
        `
      : css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          row-gap: 1em;
          column-gap: 1em;
          width: 100%;
        `}
`;
const initialState = {
  visible: false,
  currentItem: null,
};

export default function Category() {
  const location = useLocation();
  const ref = useRef();
  const category = location.pathname.slice(1);
  const [popup, setPopup] = useState(initialState);
  const { isLoading, error, data } = useQuery({
    queryKey: ["category", category],
    queryFn: () => getProductCategory(category),
  });
  function closePopup() {
    setPopup(initialState);
  }
  useEffect(
    function () {
      const overlay = ref.current;
      overlay?.addEventListener("click", closePopup);
      return () => overlay?.removeEventListener("click", closePopup);
    },
    [popup]
  );

  return (
    <>
      {popup.visible && (
        <div ref={ref}>
          <Overlay />
        </div>
      )}
      <Breakpoints>
        <Container isloading={isLoading}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            data.map((item) => <ProductItem data={item} setPopup={setPopup} />)
          )}
          {popup.visible && <AddCartPopup item={popup} setPopup={setPopup} />}
        </Container>
      </Breakpoints>
    </>
  );
}
