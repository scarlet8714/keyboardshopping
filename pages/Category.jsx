import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import Breakpoints from "../components/Breakpoints";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductItem from "../components/ProductItem";
import { getProductCategory } from "../services/apiProduct";

const Container = styled.div`
  min-height: 500px;
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

export default function Category() {
  const location = useLocation();
  const category = location.pathname.slice(1);
  const { isLoading, error, data } = useQuery({
    queryKey: ["category", category],
    queryFn: () => getProductCategory(category),
  });

  return (
    <Breakpoints>
      <Container isloading={isLoading}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          data.map((item) => <ProductItem data={item} />)
        )}
      </Container>
    </Breakpoints>
  );
}
