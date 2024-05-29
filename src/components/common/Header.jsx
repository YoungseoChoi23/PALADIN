import React from "react";
import styled from "styled-components";
import market_logo from "../../assets/common/header/market_logo.png";

const Header = () => {
  return (
    <Wrapper>
      <img src={market_logo} />
      <SearchBar>
        <p>신촌점</p>
        <input name="input" type="text" />
        <input name="button" type="submit" value="검색" />
      </SearchBar>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 100px;

  border-bottom: 1px solid #33afe9;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const SearchBar = styled.form`
  width: 485px;
  height: 40px;

  display: flex;
  align-items: center;
  gap: 16px;

  border-radius: 20px;
  border: 2px solid #33afe9;
  overflow: hidden;

  p {
    color: #33afe9;
    font-size: 12px;
    font-weight: 700;

    padding-left: 32px;
  }

  input[type="text"] {
    flex: 1;
    height: 100%;
  }

  input[type="submit"] {
    width: 80px;
    height: 40px;
    background-color: #33afe9;

    color: white;
    font-size: 16px;
    font-weight: 700;
  }
`;

export default Header;
