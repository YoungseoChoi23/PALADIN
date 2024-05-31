import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/ListPage/Sidebar";
import Sort from "../../components/ListPage/Sort";
import Pagination from "../../components/ListPage/Pagination";
import List from "../../components/ListPage/List";
import { ListPage, ListItem } from "../../components/ListPage/ListStyle";
import { getList } from "../../services/api/list";

const BookListPage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState("");

  useEffect(() => {
    getList("books")
      .then(res => {
        setCount(res.data.totalProducts);
        setData(res.data.products);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <ListPage>
      <Header isNav={true} />
      <Sidebar title="국내 도서 분류" list={category} />
      <main>
        <Sort count={count} />
        <Pagination />
        <List
          data={data}
          type="도서"
          style={BookListItem}
          detailRoute={"/bookDetail"}
        />
      </main>
      <Footer />
    </ListPage>
  );
};

const BookListItem = styled(ListItem)`
  .promo {
    margin-left: 16px;

    display: inline;

    color: var(--pink);
    font-size: 16px;
    font-weight: 400;
  }
  .description {
    grid-template-areas:
      "title title"
      "info info"
      "stock location"
      "lowest none"
      "price none";
  }
`;

const category = [
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

export default BookListPage;
