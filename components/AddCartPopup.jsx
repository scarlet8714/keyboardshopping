import { useEffect, useState } from "react";
import styled from "styled-components";
import { addCart } from "../services/apiCart";
import Quantity from "./Quantity";
import RemainQuantity from "./RemainQuantity";
import useAddCart from "./useAddCart";

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 600px;
  height: 400px;
  padding: 30px;
  border: 1px solid #5a5858;
  border-radius: 20px;
  z-index: 1001;
  display: flex;
  /* justify-content: space-around; */
  & > div {
    width: 50%;
    padding: 20px;
    img {
      width: 100%;
    }
  }
`;
const StlyedH3 = styled.h3`
  margin-bottom: 4rem;
`;

const Button = styled.button`
  width: 100%;
  background-color: #a88b47;
  margin: 4rem 2rem;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  padding: 1rem 0;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

export default function AddCartPopup({ item, setPopup }) {
  const [quantity, setQuantity] = useState(1);
  const { addAction, isError } = useAddCart();
  function handleMinus() {
    setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1));
  }

  function handlePlus() {
    setQuantity((quantity) =>
      quantity >= item.currentItem.quantity ? 90 : quantity + 1
    );
  }

  function handleAddCart() {
    addAction({
      id: item.currentItem.id,
      quantity: quantity,
    });
    if (isError) {
      alert("加入購物車失敗!!");
    } else {
      setPopup(false);
      alert("加入購物車成功!!");
    }
  }
  useEffect(
    function () {
      console.log(item);
    },
    [item]
  );
  return (
    <Popup>
      <div>
        <img src={item.currentItem.banner} alt="" />
        <h3>{item.currentItem.name}</h3>
      </div>
      <div>
        <StlyedH3>商品數量:</StlyedH3>

        <Quantity
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          quantity={quantity}
        />
        <RemainQuantity remainQuantity={item.currentItem.quantity} />
        <Button onClick={handleAddCart}>加入購物車</Button>
      </div>
    </Popup>
  );
}
