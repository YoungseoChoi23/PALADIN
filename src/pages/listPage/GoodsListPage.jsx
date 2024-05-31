import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sort from "../../components/ListPage/Sort";
import Pagination from "../../components/ListPage/Pagination";
import List from "../../components/ListPage/List";
import { ListPage, ListItem } from "../../components/ListPage/ListStyle";
import dummy from "../../components/ListPage/dummy";
import { getList } from "../../services/api/list";

const GoodsListPage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState("");

  useEffect(() => {
    getList("goods")
      .then(res => {
        setCount(res.data.totalProducts);
        setData(res.data.products);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <ListPage>
      <Header isNav={true} />
      <main>
        <Sort count={count} />
        <Pagination />
        <List
          data={data}
          type="상품"
          style={GoodsListItem}
          detailRoute={"/goodsDetail"}
        />
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
