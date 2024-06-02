import React from "react";
import ButtonBlue from "../common/ButtonBlue";
import styled from "styled-components";
import { deleteCart } from "../../services/api/carts";

const Item = ({ data }) => {
  let Wrapper = ListItem;

  if (data.type === "book") Wrapper = BookItem;

  const deleteCartItem = cartItemId => {
    deleteCart(cartItemId)
      .then(res => {
        console.log(res);
        alert("상품이 장바구니에서 삭제되었습니다.");
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <Wrapper>
      <img src={data.imgPath} />
      <div className="description">
        <h2 className="title">{data.productName}</h2>
        <span className="info">{data.info}</span>
        <span className="price">
          가격: <span className="highlightPink">{data.price}원</span>
        </span>
        <span className="location">
          위치: <span className="highlightPink">{data.location}</span>
        </span>
        <span className="condition">
          상태: <span className="highlightPink">{data.status}</span>
        </span>
      </div>
      <div className="btns">
        <ButtonBlue>출력하기</ButtonBlue>
        <ButtonBlue onClick={() => deleteCartItem(data.cartItemId)}>
          삭제하기
        </ButtonBlue>
      </div>
    </Wrapper>
  );
};

const ListItem = styled.article`
  display: flex;
  flex-flow: row nowrap;

  img {
    margin-right: 24px;

    width: 180px;
    height: 240px;
    background-color: var(--grey2);
  }
  .description {
    width: 407px;
    height: fit-content;

    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
  }
  .description > span {
    align-content: center;
    color: var(--black);
    font-size: 16px;
    font-weight: 400;
  }
  .title {
    width: 315px;
    margin-bottom: 8px;

    color: var(--black);
    font-size: 20px;
    font-weight: 700;
  }
  .highlightPink {
    color: var(--pink);
    font-size: 16px;
    font-weight: 700;
  }
  .btns {
    margin-left: auto;
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
  }
`;
const BookItem = styled(ListItem)`
  .description {
    display: grid;
    grid-template-areas:
      "title title"
      "info info"
      "price location"
      "condition none";
    gap: 16px 24px;
  }
  .title {
    grid-area: title;
  }
  .title::before {
    content: "[중고] ";
  }
  .info {
    grid-area: info;
  }
  .price {
    grid-area: price;
  }
  .location {
    grid-area: location;
  }
  .condition {
    grid-area: condition;
  }
`;

export default Item;
