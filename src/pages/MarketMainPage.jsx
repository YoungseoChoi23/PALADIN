import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/MarketMain/Banner";
import StoreNavigation from "../components/MarketMain/StoreNavigation";
import Lookup from "../components/MarketMain/Lookup";
import Qna from "../components/MarketMain/Qna";

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
      <aside>aside</aside>
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
  }

  div:last-child {
    grid-area: footer;
  }
`;

export default MarketMainPage;
