import { useState } from "react";
import styled from "styled-components";
import goods from "../../assets/detail/goods_desc.svg";

const DetailTab2 = ({}) => {
  const [tab, setTab] = useState("left");

  return (
    <DetailTabBox>
      <div className="detail-tab">
        <div className="detail-tab-name">
          <button
            className={`tab-name-first-${tab === "left" ? "left" : "false"}`}
            onClick={() => setTab("left")}
          >
            상품 소개 보기
          </button>
        </div>

        <ItemWrapper>
          <img src={goods}></img>
        </ItemWrapper>
      </div>
    </DetailTabBox>
  );
};
export default DetailTab2;

const DetailTabBox = styled.div`
  .detail-tab-name {
    width: 1200px;
    height: 63px;
    flex-shrink: 0;
    background: var(--01, #33afe9);
    display: flex;
    align-items: end;
  }

  .tab-name-false,
  .tab-name-first-false {
    display: flex;
    width: 265px;
    height: 55px;
    padding: 10px 25px 12px 25px;
    justify-content: center;
    align-items: center;
    background: var(--01, #33afe9);
    border: none;
    color: var(--00, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }
  .tab-name-first-left,
  .tab-name-mid,
  .tab-name-right {
    width: 265px;
    height: 55px;
    flex-shrink: 0;
    border-radius: 4px 4px 0px 0px;
    background: #fff;
    color: var(---, #3962ad);
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    cursor: pointer;
  }
  .tab-name-first-false,
  .tab-name-first-left {
    margin-left: 76px;
  }
  .tab-filter {
    display: flex;
    gap: 24px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 40px;
    margin-bottom: 40px;
    cursor: pointer;
  }
  .active {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .inactive {
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;
