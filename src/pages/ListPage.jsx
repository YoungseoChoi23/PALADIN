import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Book from "../components/ListPage/Book";
import Category from "../components/ListPage/Category";

const ListPage = () => {
  return (
    <Wrapper>
      <Header />
      <Aside>
        <b>국내 도서 분류</b>
        {categoryBook.map(item => {
          return <Category data={item} />;
        })}
      </Aside>
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
          {dataBook.map(item => {
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
  width: 892px;

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
const Aside = styled.aside`
  margin-top: 150px;

  b {
    width: fit-content;
    height: fit-content;
    display: block;
    margin: 0 0 18px 32px;

    color: var(--black);
    font-size: 16px;
    font-weight: 700;
  }
`;

const categoryBook = [
  {
    class: "건강/취미",
    subclass: [
      { name: "건강운동", number: 16 },
      { name: "걷기정보", number: 20 },
      { name: "공예", number: 16 },
      { name: "글씨쓰기", number: 22 },
    ],
  },
  {
    class: "고전",
    subclass: [
      { name: "고사성어", number: 16 },
      { name: "과학고전", number: 20 },
      { name: "군사고전", number: 16 },
      { name: "다시쓴고전", number: 22 },
    ],
  },
  {
    class: "과학",
    subclass: [
      { name: "기초과학", number: 16 },
      { name: "교양과학", number: 20 },
      { name: "과학의 이해", number: 16 },
      { name: "법의학", number: 22 },
    ],
  },
  {
    class: "대학교재/전문서적",
    subclass: [
      { name: "경상계열", number: 16 },
      { name: "공학계열", number: 20 },
      { name: "인문계열", number: 16 },
      { name: "전문사전", number: 22 },
    ],
  },
  {
    class: "만화",
    subclass: [
      { name: "캐릭터상품", number: 16 },
      { name: "교양만화", number: 20 },
      { name: "그래픽노블", number: 16 },
      { name: "인디만화", number: 22 },
    ],
  },
  {
    class: "달력/기타",
    subclass: [
      { name: "가계부", number: 16 },
      { name: "다이어리", number: 20 },
      { name: "달력", number: 16 },
    ],
  },
  {
    class: "사회과학",
    subclass: [
      { name: "비평/칼럼", number: 16 },
      { name: "사회문제", number: 20 },
      { name: "교육학", number: 16 },
      { name: "사회운동", number: 22 },
    ],
  },
  {
    class: "소설/시/희곡",
    subclass: [
      { name: "한국소설", number: 16 },
      { name: "일본소설", number: 20 },
      { name: "영문소설", number: 16 },
      { name: "독일소설", number: 22 },
    ],
  },
  {
    class: "수험서/자격증",
    subclass: [
      { name: "국가기술자격", number: 16 },
      { name: "민간자격", number: 20 },
      { name: "귀화시험", number: 16 },
      { name: "운전면허", number: 22 },
    ],
  },
  {
    class: "어린이",
    subclass: [
      { name: "초등 한국사", number: 16 },
      { name: "학습만화", number: 20 },
      { name: "아동 문학론", number: 16 },
    ],
  },
  {
    class: "에세이",
    subclass: [
      { name: "한국", number: 16 },
      { name: "외국", number: 20 },
      { name: "음식", number: 16 },
      { name: "명상", number: 22 },
    ],
  },
];
const dataBook = [
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
