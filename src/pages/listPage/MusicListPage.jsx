import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/ListPage/Sidebar";
import Sort from "../../components/ListPage/Sort";
import Pagination from "../../components/ListPage/Pagination";
import List from "../../components/ListPage/List";
import { ListPage, ListItem } from "../../components/ListPage/ListStyle";
import dummy from "../../components/ListPage/dummy";

const MusicListPage = () => {
  return (
    <ListPage>
      <Header />
      <Sidebar title="음반 분류" list={category} />
      <main>
        <Sort />
        <Pagination />
        <List data={dummy} type="음반" style={ListItem} />
      </main>
      <Footer />
    </ListPage>
  );
};

const category = [
  {
    class: "가요",
    subclass: [
      { name: "뉴에이지", number: 16 },
      { name: "댄스뮤직", number: 20 },
      { name: "발라드", number: 16 },
      { name: "성인가요", number: 22 },
    ],
  },
  {
    class: "국악",
    subclass: [
      { name: "국악-소리", number: 16 },
      { name: "국악-연주", number: 20 },
      { name: "국악-크로스오버", number: 16 },
      { name: "기타", number: 22 },
    ],
  },
  {
    class: "월드뮤직",
    subclass: [
      { name: "아메리카음악", number: 16 },
      { name: "아시아음악", number: 20 },
      { name: "아프리카음악", number: 16 },
      { name: "유럽음악", number: 22 },
    ],
  },
  {
    class: "재즈",
    subclass: [
      { name: "성악곡", number: 16 },
      { name: "연주곡", number: 20 },
      { name: "시리즈", number: 16 },
      { name: "퓨전", number: 22 },
    ],
  },
  {
    class: "종교/명상/기타",
    subclass: [
      { name: "가톨릭", number: 16 },
      { name: "기독교", number: 20 },
      { name: "불교", number: 16 },
      { name: "기타", number: 22 },
    ],
  },
  {
    class: "클래식",
    subclass: [
      { name: "고음악", number: 16 },
      { name: "독주곡", number: 20 },
      { name: "실내악", number: 16 },
      { name: "협주곡", number: 22 },
    ],
  },
  {
    class: "팝",
    subclass: [
      { name: "뉴에이지", number: 16 },
      { name: "록", number: 20 },
      { name: "메탈", number: 16 },
      { name: "힙합", number: 22 },
    ],
  },
  {
    class: "해외구매",
    subclass: [
      { name: "DVD", number: 16 },
      { name: "클래식", number: 20 },
      { name: "팝", number: 16 },
      { name: "LP", number: 22 },
    ],
  },
  {
    class: "J-pop",
    subclass: [
      { name: "뉴에이지", number: 16 },
      { name: "록", number: 20 },
      { name: "일렉트로닉", number: 16 },
    ],
  },
  {
    class: "LP",
    subclass: [
      { name: "클래식", number: 16 },
      { name: "팝", number: 20 },
      { name: "가요", number: 16 },
      { name: "재즈", number: 20 },
    ],
  },
  {
    class: "O.S.T",
    subclass: [
      { name: "게임", number: 16 },
      { name: "뮤지컬", number: 20 },
      { name: "영화음악", number: 16 },
      { name: "기타", number: 20 },
    ],
  },
];

export default MusicListPage;
