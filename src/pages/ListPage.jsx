import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Book from "../components/ListPage/Book";

const ListPage = () => {
  return (
    <Wrapper>
      <Header />
      <aside>aside</aside>
      <Main>
        <b>총 {Intl.NumberFormat().format()}건의 결과</b>
        <Sort>
          <input type="radio" id="sort1" name="sort" value="상품명순" />
          <label for="sort1">상품명순</label>
          <input type="radio" id="sort2" name="sort" value="출시일순" />
          <label for="sort2">출시일순</label>
          <input
            type="radio"
            id="sort3"
            name="sort"
            value="등록순순"
            defaultChecked
          />
          <label for="sort3">등록순</label>
          <input type="radio" id="sort4" name="sort" value="저가격순" />
          <label for="sort4">저가격순</label>
          <input type="radio" id="sort5" name="sort" value="고가격순" />
          <label for="sort5">고가격순</label>
          <input type="radio" id="sort6" name="sort" value="베스트순" />
          <label for="sort6">베스트순</label>
        </Sort>
        <Pagination>
          <button disabled>{"<"}</button>
          <div>
            <small>총 100페이지</small>
            <fieldset>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => {
                return (
                  <>
                    <input
                      type="radio"
                      id={number}
                      name="pagination"
                      value={number}
                    />
                    <label for={number}>{number}</label>
                  </>
                );
              })}
            </fieldset>
            <small>100페이지 중 6페이지</small>
          </div>
          <button>{">"}</button>
          <button>{">>"}</button>
        </Pagination>
        <ol>
          {data.map(item => {
            return (
              <li>
                <Book data={item} />
              </li>
            );
          })}
        </ol>
      </Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";
  grid-gap: 60px 45px;

  header {
    grid-area: header;
  }
  aside {
    grid-area: aside;
  }
  main {
    grid-area: main;
  }
  div:last-child {
    grid-area: footer;
  }
`;
const Main = styled.main`
  margin-right: 120px;

  b {
    width: fit-content;
    height: fit-content;
    display: block;
    margin-bottom: 16px;

    color: var(--black);
    font-size: 16px;
    font-weight: 700;
  }
  ol {
    display: flex;
    flex-flow: column nowrap;
    gap: 56px;

    counter-reset: items;
  }
  ol li {
    display: flex;
    counter-increment: items;
  }
  ol li:before {
    content: counter(items) ". ";
    vertical-align: top;
    margin-right: 20px;
  }
`;
const Sort = styled.fieldset`
  margin-bottom: 46px;

  display: flex;
  flex-flow: row nowrap;
  gap: 24px;

  input[type="radio"] {
    display: none;
  }
  label {
    color: var(--grey2);
    font-size: 16px;
    font-weight: 400;
  }
  input[type="radio"]:checked + label {
    color: var(--black);
  }
`;
const Pagination = styled.section`
  margin-bottom: 32px;
  justify-content: end;

  display: flex;
  flex-flow: row nowrap;
  gap: 16px;

  div {
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  }
  div small {
    color: var(--gray2);
    font-size: 12px;
    font-weight: 400;
    text-align: end;
  }
  div fieldset {
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;
  }
  div fieldset input[type="radio"] {
    display: none;
  }
  div fieldset label {
    height: 18px;
    padding: 0 4px;
    background-color: var(--grey1);

    font-size: 12px;
    font-weight: 400;
    text-align: center;
    align-content: center;
  }
  div fieldset input[type="radio"]:checked + label {
    background-color: var(--pink);
    color: white;
  }
`;

const data = [
  {
    title: "도서 제목",
    promo: "[2022년 사회과학 분야 1위]",
    publisher: "출판사",
    writer: "지은이",
    stock: 0,
    location: "A17",
    lowest: 7000,
    price: 13000,
  },
  {
    title: "도서 제목이 길어졌을 경우의 도서 제목 정렬",
    promo: "[2022년 사회과학 분야 1위]",
    publisher: "출판사",
    writer: "지은이",
    stock: 0,
    location: "A17",
    lowest: 7000,
    price: 13000,
  },
  {
    title: "도서 제목",
    promo: "[2022년 사회과학 분야 1위]",
    publisher: "출판사",
    writer: "지은이",
    stock: 0,
    location: "A17",
    lowest: 7000,
    price: 13000,
  },
];

export default ListPage;
