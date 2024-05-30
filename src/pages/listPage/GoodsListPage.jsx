import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sort from "../../components/ListPage/Sort";
import Pagination from "../../components/ListPage/Pagination";
import List from "../../components/ListPage/List";
import { ListPage, ListItem } from "../../components/ListPage/ListStyle";
import dummy from "../../components/ListPage/dummy";

const GoodsListPage = () => {
  return (
    <ListPage>
      <Header />
      <main>
        <Sort />
        <Pagination />
        <List data={dummy} type="상품" style={GoodsListItem} />
      </main>
      <Footer />
    </ListPage>
  );
};

const GoodsListItem = styled(ListItem)`
  .price {
    display: none;
  }
`;

export default GoodsListPage;
