import React from "react";
import styled from "styled-components";

import market_logo from "../../assets/common/header/market_logo.png";

const Header = () => {
  return (
    <Wrapper>
      <div id="content">
        <img src={market_logo} />
        <SearchBar>
          <p>신촌점</p>
          <input name="input" type="text" />
          <input name="button" type="submit" value="검색" />
        </SearchBar>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;

  border-bottom: 1px solid #33afe9;

  #content {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    width: 955px;
  }

  img {
    padding-right: 50px;
  }
`;

const SearchBar = styled.form`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  width: 485px;
  height: 40px;

  border-radius: 20px;
  border: 2px solid #33afe9;
  overflow: hidden;

  p {
    color: #33afe9;
    font-size: 12px;
    font-weight: 700;

    margin: 0 16px 0 16px;
    padding-left: 16px;
  }

  input[type="text"] {
    border: none;
    outline: none;

    flex: 1;
    height: 100%;

    margin-right: 16px;
  }

  input[type="submit"] {
    width: 80px;
    height: 40px;

    border: none;
    outline: none;
    background-color: #33afe9;

    color: white;
    font-size: 16px;
    font-weight: 700;
  }
`;

export default Header;
