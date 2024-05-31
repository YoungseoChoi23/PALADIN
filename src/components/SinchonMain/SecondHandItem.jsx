import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SecondHandItem = ({ type, book, name, price, discount, productId }) => {
  const navigate = useNavigate();

  const ProductDetail = () => {
    if (type == "도서") navigate(`/bookDetail/${productId}`);
    else {
      navigate(`/recordDetail/${productId}`);
    }
  };
  return (
    <Item>
      <div className="secondHandItem">
        <div>
          <img
            className={`category-${type}-img`}
            onClick={ProductDetail}
            src={book}
          ></img>
        </div>
        <div className="name">{name}</div>
        <div className="price-discount">
          <div className="price">{price}원</div>
          <div className="discount">{discount}% 할인</div>
        </div>
      </div>
    </Item>
  );
};
export default SecondHandItem;

const Item = styled.div`
  .secondHandItem {
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
    display: flex;
    justify-content: center;
  }
  .price-discount {
    display: flex;
    gap: 16px;
    margin: auto;
  }
  .price {
    color: var(--pink);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .discount {
    color: var(--grey2);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .category-도서-img {
    width: 150px;
    height: 222px;
    cursor: pointer;
  }
  .category-음반-img {
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
`;
