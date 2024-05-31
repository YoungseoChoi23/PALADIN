import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import dummy from "../../components/CartPage/dummy";
import Item from "../../components/CartPage/Item";

const CartPage = () => {
  return (
    <div>
      <Header />
      <Main>
        <h1>쇼핑 목록</h1>
        <small>
          본 목록은 중고매장 이용 시 '프린트 출력'을 위한 임시보관 기능입니다.
          로그인 저장이 안되며, PC/모바일 웹에서 재확인할 수 없으니 유의하세요.
          로그인하여 개인별 구매 WISH LIST에 저장을 원하시는 경우에는 '온라인
          중고샵' 또는 새 상품의 '보관함 담기' 기능을 이용해주시기 바랍니다.
        </small>
        <ul>
          {dummy.map(item => {
            return (
              <li key={`${Date.now()}-${Math.random()}`}>
                <Item data={item} />
              </li>
            );
          })}
        </ul>
      </Main>
      <Footer />
    </div>
  );
};

const Main = styled.main`
  width: 1200px;
  margin: 40px auto;

  h1 {
    margin-bottom: 16px;

    color: grey;
    font-size: 24px;
    font-weight: 600;
  }
  small {
    display: inline-block;
    margin-bottom: 34px;

    color: grey;
    font-size: 14px;
    font-weight: 400;
  }
  ul {
    padding: 100px;

    display: flex;
    flex-flow: column nowrap;
    gap: 56px;

    border: 3px solid #d9d9d9;
    border-radius: 20px;
  }
`;

export default CartPage;
