import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrowRight from "../../assets/S_main/arrow_right.svg";

const SideBar = ({ sideBarName, detailText1, detailText2, detailText3 }) => {
  return (
    <SideBarBox>
      <div className="sidebar">
        <div className="sidebar-name">
          <p>{sideBarName}</p>
          <div className="sidebar-more">
            <p>"더보기"</p>
            <img src={arrowRight} />
          </div>
        </div>
        <div className="sidebar-content1">{detailText1}</div>
        <div className="sidebar-content2">{detailText2}</div>
        <div className="sidebar-content3">{detailText3}</div>
      </div>
    </SideBarBox>
  );
};
export default SideBar;

const SideBarBox = styled.div`
  .sidebar {
    margin-bottom: 35px;
  }
  .sidebar-name {
    display: flex;
    width: 282px;
    height: 40px;
    padding: 12px 16px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background: var(--grey2);
    color: var(--00, #fff);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .sidebar-content1,
  .sidebar-content2,
  .sidebar-content3 {
    display: flex;
    width: 282px;
    padding: 16px;
    box-sizing: border-box;
    align-items: center;
    border-bottom: 1px solid var(--grey1);
    background: var(--00, #fff);
    color: var(--grey2);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .sidebar-more {
    display: flex;
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .sidebar-more img {
    width: 16px;
    height: 16px;
  }
`;
