import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/MarketMain/Banner";

const MarketMainPage = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
          <Banner />
        </main>
        <aside>aside</aside>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 40px 0;

  display: flex;
  flex-direction: row nowrap;
  align-items: start;
  justify-content: center;
  gap: 24px;
`;

export default MarketMainPage;
