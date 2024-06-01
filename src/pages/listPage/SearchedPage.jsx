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
import { useSearchParams } from "react-router-dom";
import { getSearchedList } from "../../services/api/search";

const SearchedListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const input = searchParams.get("input");

  const [data, setData] = useState([]);
  const [count, setCount] = useState("");

  useEffect(() => {
    getSearchedList(input)
      .then(res => {
        console.log(res);
        setData(res.data);
        setCount(res.data.length);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <ListPage>
      <Header isNav={true} />
      <main>
        <Sort count={count} />
        <Pagination />
        {data.map(item => {
          return (
            <Item>
              <img src={item.imgPath} />
              <div className="description">
                <div className="title">
                  <h2>{item.productName}</h2>
                </div>
                <span className="info">{item.info}</span>
                <span className="stock">
                  재고:{" "}
                  <span className="highlightBlue">{item.stockQuantity}부</span>
                </span>
                <span className="location">
                  위치:{" "}
                  <span className="highlightPink">
                    {item.items && item.items.items[0].location}
                  </span>
                </span>
                <span className="lowest">
                  최저가:{" "}
                  <span className="highlightPink">
                    {item.items && item.items.items[0].price}원
                  </span>
                </span>
                <span className="price">정가: {item.originalPrice}원</span>
              </div>
            </Item>
          );
        })}
      </main>
      <Footer />
    </ListPage>
  );
};

const Item = styled.article`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;

  img {
    margin-right: 24px;

    width: 180px;
    height: 240px;
    background-color: var(--grey2);
  }
  .description {
    width: 407px;
    height: fit-content;

    display: grid;
    grid-template-areas:
      "title title"
      "info info"
      "stock location"
      "lowest price";
    gap: 22px 48px;
  }
  .description > span {
    align-content: center;
    color: var(--black);
    font-size: 16px;
    font-weight: 400;
  }
  .title {
    grid-area: title;

    width: 315px;

    color: var(--black);
    font-size: 20px;
    font-weight: 700;
  }
  .promo {
    display: none;
  }
  .info {
    grid-area: info;
  }
  .stock {
    grid-area: stock;
  }
  .location {
    grid-area: location;
  }
  .lowest {
    grid-area: lowest;
  }
  .price {
    grid-area: price;
  }
  .highlightBlue {
    color: var(--blue3);
    font-size: 16px;
    font-weight: 700;
  }
  .highlightPink {
    color: var(--pink);
    font-size: 16px;
    font-weight: 700;
  }
  .btns {
    margin-left: auto;
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
  }

  margin-bottom: 30px;
`;

export default SearchedListPage;
