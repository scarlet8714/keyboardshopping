import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { getCart } from "../services/apiCart";
import Breakpoints from "../components/Breakpoints";
import DeleteProductIcon from "../components/DeleteProductIcon";
import useDeleteCart from "../components/useDeleteCart";
import LoadingSpinner from "../components/LoadingSpinner";
import useUpdateCart from "../components/useUpdateCart";

const Button = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #f6f6f6;
  border: 0;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #a88b47;
    color: white;
  }
`;

const Input = styled.input`
  border: 0;
  height: 100%;
  width: 4rem;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartBlock = styled.div`
  margin-bottom: 2rem;
  display: flex;
  /* justify-content: center; */
  border-top: 1px solid #00000032;
  align-items: center;
`;
const Title = styled.h2`
  border-left: 15px solid black;
  padding-left: 1rem;
`;

const Total = styled.span`
  color: red;
  font-weight: 700;
  margin-left: 3rem;
  line-height: 30px;
`;

const Img = styled.img`
  max-width: 150px;
`;
const Delete = styled.span`
  margin-left: auto;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    fill: red;
  }
`;

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const { isLoading, data } = useQuery({
    queryKey: ["usercart"],
    queryFn: getCart,
  });
  const { deleteAction, isDeleting } = useDeleteCart();
  function handleDelete(id) {
    deleteAction(
      { id: id },
      {
        onSuccess: (data) => {
          alert("移除購物車成功");
        },
        onError: (err) => {
          alert("移除購物車失敗");
        },
      }
    );
  }
  const { updateAction, isUpdating } = useUpdateCart();
  function handleMinus(id, quantity) {
    if (quantity === 1) return;
    updateAction(
      { id: id, quantity: quantity - 1 },
      {
        onError: (err) => alert("更新購物車失敗"),
      }
    );
  }

  function handlePlus(id, quantity) {
    updateAction(
      { id: id, quantity: quantity + 1 },
      {
        onError: (err) => alert("更新購物車失敗"),
      }
    );
  }
  useEffect(
    function () {
      setCart(data);
    },
    [data]
  );
  return (
    <Breakpoints>
      <Title>購物車清單</Title>
      <CartContainer>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          cart?.map((item) => (
            <CartBlock key={item.id}>
              <Img
                src={item.product.banner}
                style={{ width: "200px", display: "inline-block" }}
                alt=""
              />
              <span style={{ padding: "0 2rem", width: "500px" }}>
                {item.product.name}
              </span>
              <div>
                <Button onClick={() => handleMinus(item.id, item.quantity)}>
                  -
                </Button>
                <Input type="text" value={item.quantity} />
                <Button onClick={() => handlePlus(item.id, item.quantity)}>
                  +
                </Button>
                <Total>$ {item.product.price * item.quantity}</Total>
              </div>
              <Delete onClick={() => handleDelete(item.id)}>
                <DeleteProductIcon />
              </Delete>
            </CartBlock>
          ))
        )}
      </CartContainer>
    </Breakpoints>
  );
}
