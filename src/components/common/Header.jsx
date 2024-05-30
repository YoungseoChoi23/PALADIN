import React from "react";
import styled from "styled-components";
import market_logo from "../../assets/common/header/market_logo.png";

const Header = () => {
  return (
    <header>
      <NavBar>
        <ul>
          <li className="current">중고매장</li>
          <li>온라인 알라딘</li>
        </ul>
        <ul>
          <li>장바구니</li>
          <li>회원가입</li>
          <li>중고매장 FAQ</li>
        </ul>
      </NavBar>
      <SearchBar>
        <img src={market_logo} />
        <form>
          <p>신촌점</p>
          <input name="input" type="text" />
          <input name="button" type="submit" value="검색" />
        </form>
      </SearchBar>
    </header>
  );
};

const NavBar = styled.nav`
  height: 40px;
  padding: 0 120px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  background: #33afe9;
  ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  ul li {
    height: 100%;
    padding: 0 8px;

    color: #fff;
    font-size: 16px;
    font-weight: 700;
    align-content: center;
  }
  .current {
    background: #fff;
    color: #3962ad;
  }
`;

const SearchBar = styled.section`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  border-bottom: 1px solid #33afe9;

  form {
    width: 485px;
    height: 40px;

    display: flex;
    align-items: center;
    gap: 16px;

    border-radius: 20px;
    border: 2px solid #33afe9;
    overflow: hidden;
  }
  form p {
    color: #33afe9;
    font-size: 12px;
    font-weight: 700;

    padding-left: 32px;
  }
  form input[type="text"] {
    flex: 1;
    height: 100%;
  }
  form input[type="submit"] {
    width: 80px;
    height: 40px;
    background-color: #33afe9;

    color: white;
    font-size: 16px;
    font-weight: 700;
  }
`;

export default Header;
