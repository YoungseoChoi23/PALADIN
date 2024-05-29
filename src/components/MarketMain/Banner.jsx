import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as BtnPrevImg } from "../../assets/MarketMain/main-banner-btn-left.svg";
import { ReactComponent as BtnNextImg } from "../../assets/MarketMain/main-banner-btn-right.svg";

const Banner = () => {
  const [bannerImg, setBannerImg] = useState(0);

  function prev() {
    setBannerImg((bannerImg + 6 - 1) % 6);
  }
  function next() {
    setBannerImg((bannerImg + 1) % 6);
  }

  return (
    <Wrapper>
      <button onClick={prev}>
        <BtnPrevImg />
      </button>
      <img
        src={require(`../../assets/MarketMain/banner-${bannerImg}.png`)}
        alt="banner"
      />
      <button onClick={next}>
        <BtnNextImg />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 11px;

  img {
    width: 588px;
  }
`;

export default Banner;
