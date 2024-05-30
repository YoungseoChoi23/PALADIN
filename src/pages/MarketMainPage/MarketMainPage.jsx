import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Banner from "../../components/MarketMain/Banner";
import StoreNavigation from "../../components/MarketMain/StoreNavigation";
import Lookup from "../../components/MarketMain/Lookup";
import Qna from "../../components/MarketMain/Qna";
import Info from "../../components/MarketMain/Info";
import SalesUpdate from "../../components/MarketMain/SalesUpdate";

const MarketMainPage = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Banner />
        <StoreNavigation />
        <Lookup />
        <Qna />
      </main>
      <aside>
        <img
          src={require("../../assets/MarketMain/sub-banner-01.png")}
          alt="2만원 이상 구매 시, 택배비 무료"
        />
        <Info heading="매장소식" content={marketInfo} />
        <Info heading="중고매장 FAQ" />
        <SalesUpdate />
        <img
          src={require("../../assets/MarketMain/sub-banner-02.png")}
          alt="원클릭 팔기"
        />
        <img
          src={require("../../assets/MarketMain/sub-banner-03.png")}
          alt="알라딘 중고박스"
        />
      </aside>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
  grid-gap: 40px 24px;

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
    width: 690px;
    margin-left: auto;

    display: flex;
    flex-flow: column nowrap;
    gap: 40px;
  }

  aside {
    grid-area: aside;
    width: 282px;
    margin-right: auto;

    display: flex;
    flex-flow: column nowrap;
    gap: 24px;
  }

  aside > img {
    width: 100%;
  }

  div:last-child {
    grid-area: footer;
  }
`;

const marketInfo = [
  "매입 후 <알라딘캐시> 정산 시 5% 추가 지급",
  "매입 후 <알라딘캐시> 정산 시 10% 추가 지급",
  "2024 서울 입학준비금 포인트 사용처",
  "Apple Pay 결제 지원 시작",
  "매장 첫 구매 시 5% 적립",
  "카페 테일의 풍성한 혜택",
];

export default MarketMainPage;
