import banner from "../../assets/S_main/banner.svg";
import map from "../../assets/S_main/map.svg";
import cross_section from "../../assets/S_main/cross_section.svg";

import styled from "styled-components";
import React, { useState } from "react";
import Category from "../../components/SinchonMain/Category";
import SideBar from "../../components/SinchonMain/SideBar";
import SecondHandBook from "../../components/SinchonMain/SecondHandBook";
import Record from "../../components/SinchonMain/Record";
import Goods from "../../components/SinchonMain/Goods";
import GetDirectionModal from "../../components/SinchonMain/GetDirectionModal";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const SinchonMainPage = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isCrossSectionModalOpen, setIsCrossSectionModalOpen] = useState(false);

  const openMapModal = () => {
    setIsMapModalOpen(true);
  };
  const openCrossSectionModal = () => {
    setIsCrossSectionModalOpen(true);
  };
  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };
  const closeCrossSectionModal = () => {
    setIsCrossSectionModalOpen(false);
  };
  return (
    <>
      <Header isNav={true} />
      <Wrapper>
        <div className="SinchonMainPage">
          <div className="banner">
            <img src={banner} alt="banner img" />
            <div className="banner-text">
              <div className="banner-text1">신촌점</div>
              <div className="banner-text2">
                영업시간 : 09:30 ~ 22:00 <br />
                정기휴일 : 설날(음력), 추석 당일{" "}
              </div>
              <div className="banner-text3">
                매장통합 콜센터 : 1544-2514 <br />
                주차장 : 없음
                <br />
                휠체어 사용 : 매장 진입 불가능
                <br />
                사용가능 지역화폐 : 제로페이
              </div>
              <div className="banner-buttons">
                <button className="banner-wayButton" onClick={openMapModal}>
                  찾아오는 길
                </button>
                <GetDirectionModal
                  img={map}
                  isOpen={isMapModalOpen}
                  onClose={closeMapModal}
                />
                <button
                  className="banner-crossSectionButton"
                  onClick={openCrossSectionModal}
                >
                  매장 서가 단면도
                </button>
                <GetDirectionModal
                  img={cross_section}
                  isOpen={isCrossSectionModalOpen}
                  onClose={closeCrossSectionModal}
                />
              </div>
            </div>
          </div>
        </div>
        <CategorySideBar>
          <CategoryWrapper>
            <Category />
            <SecondHandBook />
            <Record />
            <Goods />
          </CategoryWrapper>
          <SideBars>
            <SideBar
              sideBarName="매장소식"
              detailText1="매입 후 <알라딘캐시> 정산 시 5% 추가 지급"
              detailText2="매입 후 <알라딘캐시> 정산 시 10% 추가 지급"
              detailText3="2024 서울 입학준비금 포인트 사용처"
            />
            <SideBar
              sideBarName="중고매장 FAQ"
              detailText1="매장의 위치/주소/전화번호를 알고 싶어요."
              detailText2="중고매장의 재고 유무/가격/외관상태 확인 가능한가요?"
              detailText3="중고매장에 방문해 중고 상품 판매도 가능한가요?"
            />
          </SideBars>
        </CategorySideBar>
      </Wrapper>
      <Footer />
    </>
  );
};
export default SinchonMainPage;

const Wrapper = styled.div`
  width: 996px;
  height: 2208px;
  margin: auto;
  .SinchonMainPage {
    margin-top: 40px;
  }
  .banner {
    position: relative;
  }
  .banner-text {
    position: absolute;
    top: 67px;
    left: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .banner-text1 {
    color: #fff;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .banner-text2 {
    color: #fff;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .banner-text3 {
    color: #fff;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .banner-wayButton {
    display: flex;
    padding: 4px 8px;
    margin-right: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    border: 1px solid var(--blue3);
    background: var(--blue1);
    color: var(--blue3);
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .banner-crossSectionButton {
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    border: 1px solid var(--blue3);
    background: var(--blue1);
    color: var(--blue3);
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .banner-buttons {
    display: flex;
  }
`;
const CategoryWrapper = styled.div`
  margin-top: 40px;
`;

const CategorySideBar = styled.div`
  display: flex;
`;
const SideBars = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 24px;
`;
