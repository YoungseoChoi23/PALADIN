import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const GoodsItem = ({ book, name, price, productId }) => {
  const navigate = useNavigate();

  const ProductDetail = () => {
    navigate(`/goodsDetail/${productId}`);
  };
  return (
    <Item>
      <div className="goodsItem">
        <div>
          <img className="product-img" onClick={ProductDetail} src={book}></img>
        </div>
        <div className="name">{name}</div>
        <div className="price-discount">
          <div className="price">{price}원</div>
        </div>
      </div>
    </Item>
  );
};
export default GoodsItem;

const Item = styled.div`
  .goodsItem {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .name {
    color: var(--black);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: auto;
  }
  .price-discount {
    display: flex;
    gap: 16px;
  }
  .price {
    color: var(--pink);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: auto;
  }
  .discount {
    color: var(--grey2);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .product-img {
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
`;
