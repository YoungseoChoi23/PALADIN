import Detail from "./Detail";
import styled from "styled-components";

const RecordDetailItem = ({ title, source, type, price, state }) => {
  return (
    <>
      <DetailItem>
        <div className="record-detail-item">
          <div className="record-item-img"></div>
          <div className="text-btns">
            <div className="record-item-text">
              <div className="title">{title}</div>
              <div className="source">{source}</div>
              <div className="location">
                {type} 위치: <p>A17</p> (위에서부터 4번째칸)
              </div>
              <div className="price">
                가격: <p>{price}</p>
              </div>
              <div className="state">
                상태:<p>{state}</p>
              </div>
            </div>
            <div className="buttons">
              <button className="online-purchase">온라인 구매</button>
              <button className="add-cart">장바구니 추가</button>
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
    width: 670px;
    height: 240px;
    flex-shrink: 0;
    display: flex;
    justify-content: start;
  }
  .record-item-img {
    width: 180px;
    height: 180px;
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
  .title {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: start;
    display: flex;
    width: 75px;
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
  }
`;
