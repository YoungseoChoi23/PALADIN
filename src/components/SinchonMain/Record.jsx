import { useState, useEffect } from "react";
import styled from "styled-components";
import SecondHandItem from "./SecondHandItem";
import { getProduct } from "../../services/api/example";

const Record = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct()
      .then(res => setData(res.data.productTypes[1].products))
      .catch(error => {
        if (error.code === "ERR_NETWORK") {
          console.error(
            "Network error: Please check your internet connection or the server status.",
          );
        } else {
          console.error("Error:", error.message);
        }
      });
  }, []);
  return (
    <RecordList>
      <div className="record-text">음반·비디오</div>
      <div className="record-items">
        {data.map(book => {
          const lowestPriceItem = book.items.reduce((minItem, currentItem) => {
            return currentItem.price < minItem.price ? currentItem : minItem;
          });
          const discount =
            ((book.originalPrice - lowestPriceItem.price) /
              book.originalPrice) *
            100;
          return (
            <SecondHandItem
              key={book.productId}
              type="음반"
              book={book.items[0].imgPath}
              name={book.productName}
              price={lowestPriceItem.price}
              discount={discount.toFixed(0)}
              productId={book.productId}
            />
          );
        })}
      </div>
    </RecordList>
  );
};
export default Record;

const RecordList = styled.div`
  .record-text {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 64px;
    margin-bottom: 39px;
  }
  .record-items {
    display: flex;
    gap: 30px;
  }
`;
/*<SecondHandItem
book={record1}
name="세븐틴 - SEVENTEEN
BEST ALBUM ‘17 IS"
price="23,400원"
discount="11% 할인"
/>
<SecondHandItem
book={record2}
name="세븐틴 - SEVENTEEN
BEST ALBUM ‘17 IS"
price="12,400원"
discount="11% 할인"
/>
<SecondHandItem
book={record3}
name="아이브 - 미니 2집 IVE
SWITCH (PLVE ver.)"
price="13,500원"
discount="11% 할인"
/>
<SecondHandItem
book={record4}
name="아이브 - 미니 2집 IVE
SWITCH (Digipack"
price="12,800원"
discount="10% 할인"
/>*/
