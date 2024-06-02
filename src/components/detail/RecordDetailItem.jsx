import styled from "styled-components";
import { postCart } from "../../services/api/carts";
import { useNavigate } from "react-router-dom";

const RecordDetailItem = ({
  title,
  source,
  type,
  price,
  state,
  location,
  img,
  itemId,
}) => {
  const navigate = useNavigate();

  const addToCart = itemId => {
    postCart(itemId)
      .then(res => {
        alert(res.data.message);
      })
      .catch(err => {
        alert("로그인 후 이용 가능합니다.");
        navigate("/login");
      });
  };
  return (
    <>
      <DetailItem>
        <div className="record-detail-item">
          <img className={`${type}-item-img`} src={img}></img>
          <div className="text-btns">
            <div className="record-item-texts">
              <div className="record-item-text">
                <div className={`title-${type}`}>{title}</div>
                <div className="source">{source}</div>
                {type === "음반" ? (
                  <div className="location">
                    {type} 위치: <p>{location}</p>
                  </div>
                ) : (
                  <></>
                )}
                <div className="price">
                  가격: <p>{price}원</p>
                </div>
                <div className="state">
                  상태:<p>{state}</p>
                </div>
              </div>
              <div className="detail-text2">
                {type === "도서" ? (
                  <div className="location">
                    {type} 위치: <p>{location}</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="buttons">
              <button className="online-purchase">온라인 구매</button>
              <button className="add-cart" onClick={() => addToCart(itemId)}>
                장바구니 추가
              </button>
            </div>
          </div>
        </div>
      </DetailItem>
    </>
  );
};
export default RecordDetailItem;

const DetailItem = styled.div`
  .record-detail-item {
    height: 240px;
    flex-shrink: 0;
    display: flex;
    justify-content: start;
  }
  .음반-item-img {
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    background: #d9d9d9;
  }
  .도서-item-img {
    width: 180px;
    height: 240px;
    flex-shrink: 0;
    background: #d9d9d9;
  }
  .text-btns {
    width: 490px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    margin-left: 24px;
  }
  .record-item-text {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;
  }
  .record-item-texts {
    display: flex;
  }
  .detail-text2 {
    display: flex;
    align-items: center;
    margin-top: 45px;
  }
  .title-도서 {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    height: 31px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
  }
  .title-음반 {
    color: #000;

    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: start;

    height: 31px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
  }
  .source,
  .location,
  .price,
  .state {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    gap: 3px;
    flex-wrap: nowrap;
  }

  .location p,
  .price p,
  .state p {
    color: var(--02, #ea328f);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .buttons {
    display: flex;
    gap: 24px;
  }
  .online-purchase {
    display: inline-flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: var(--02, #ea328f);
    color: var(--00, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    cursor: pointer;
  }
  .add-cart {
    display: inline-flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--02, #ea328f);
    background: var(--00, #fff);
    color: var(--02, #ea328f);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
`;
