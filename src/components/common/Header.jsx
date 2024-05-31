import React, { useState } from "react";
import styled from "styled-components";
import market_logo from "../../assets/common/header/market_logo.png";
import { useNavigate } from "react-router-dom";

const Header = ({ isNav = false }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const isLogin = !!localStorage.getItem("paladintoken");
  const handleChange = e => {
    setInput(e.target.value);
  };

  const searchProduct = () => {
    navigate(`/list/search/?input=${input}`);
  };
  return (
    <>
      <header>
        <NavBar>
          <ul>
            <li className="current" onClick={() => navigate("/")}>
              중고매장
            </li>
            <li>온라인 알라딘</li>
          </ul>
          <ul>
            <li onClick={() => navigate("/cart")}>장바구니</li>
            <li onClick={() => navigate("/login")}>
              {isLogin ? "로그아웃" : "로그인"}
            </li>
            <li>중고매장 FAQ</li>
          </ul>
        </NavBar>
        <SearchBar>
          <img src={market_logo} alt="logo" onClick={() => navigate("/")} />
          <div className="form">
            <b>신촌점</b>
            <input
              name="input"
              type="text"
              onChange={handleChange}
              value={input}
            />
            <div className="button" onClick={searchProduct}>
              검색
            </div>
          </div>
        </SearchBar>
        {isNav && (
          <Container>
            <div onClick={() => navigate("/sinchonMain")}>매장소개</div>
            <div onClick={() => navigate("/list/book")}>중고 도서</div>
            <div onClick={() => navigate("/list/goods")}>알라딘 굿즈</div>
            <div onClick={() => navigate("/list/music")}>음반 비디오</div>
          </Container>
        )}
      </header>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: -10px;
  padding-left: 40px;
  padding-bottom: 10px;

  font-size: 16px;
  font-weight: 700;
  color: var(--blue3);

  border-bottom: 1px solid #33afe9;
`;

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

    font-size: 16px;
    font-weight: 700;
    color: white;
    align-content: center;
  }
  .current {
    background: white;
    color: var(--blue3);
  }
`;

const SearchBar = styled.section`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  .form {
    width: 485px;
    height: 40px;

    display: flex;
    align-items: center;
    gap: 16px;

    border-radius: 20px;
    border: 2px solid #33afe9;
    overflow: hidden;
  }
  .form b {
    padding-left: 32px;

    font-size: 12px;
    font-weight: 700;
    color: #33afe9;
  }
  .form input[type="text"] {
    flex: 1;
    height: 100%;
    font-family: "Pretendard-regular";
  }
  .button {
    width: 80px;
    height: 40px;
    background-color: #33afe9;

    font-family: "Pretendard-regular";
    font-size: 16px;
    font-weight: 700;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Header;
