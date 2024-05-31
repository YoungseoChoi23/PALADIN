import { useState, useEffect } from "react";
import { ProductDetail, Productlist } from "../../services/api/example";
import RecordDetailItem from "./RecordDetailItem";
import styled from "styled-components";
import Review from "./Review";
import { useParams } from "react-router-dom";

const DetailTab = ({ isRecord, img }) => {
  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);

  const [tab, setTab] = useState("left");
  const [filter, setFilter] = useState("상품명순");
  const { productId } = useParams();

  const getBookDetailData = async productId => {
    if (productId) {
      const res = await ProductDetail({ productId });
      setData(res.data);
    }
  };

  useEffect(() => {
    getBookListData(productId);
  }, [productId]);

  const getBookListData = async productId => {
    if (productId) {
      const res = await Productlist({ productId });
      setContent(res.data.items);
    }
  };

  useEffect(() => {
    getBookDetailData(productId);
  }, [productId]);

  const filterChange = filterName => {
    setFilter(filterName === filter ? filter : filterName);
  };

  return (
    <DetailTabBox>
      <div className="detail-tab">
        <div className="detail-tab-name">
          <button
            className={`tab-name-first-${tab === "left" ? "left" : "false"}`}
            onClick={() => setTab("left")}
          >
            중고매장 상품 모두보기 (n)
          </button>
          <button
            className={`tab-name-${tab === "mid" ? "mid" : "false"}`}
            onClick={() => setTab("mid")}
          >
            온라인매장 리뷰 보기
          </button>
          <button
            className={`tab-name-${tab === "right" ? "right" : "false"}`}
            onClick={() => setTab("right")}
          >
            책소개 보기
          </button>
        </div>

        {tab == "left" ? (
          <>
            <div className="tab-filter">
              <p
                className={filter === "상품명순" ? "active" : "inactive"}
                onClick={() => {
                  filterChange("상품명순");
                }}
              >
                상품명순
              </p>
              <p
                className={filter === "출시일순" ? "active" : "inactive"}
                onClick={() => {
                  filterChange("출시일순");
                }}
              >
                출시일순
              </p>
              <p
                className={filter === "등록순" ? "active" : "inactive"}
                onClick={() => {
                  filterChange("등록순");
                }}
              >
                등록순
              </p>
              <p
                className={filter === "저가격순" ? "active" : "inactive"}
                onClick={() => {
                  filterChange("저가격순");
                }}
              >
                저가격순
              </p>
              <p
                className={filter === "고가격순" ? "active" : "inactive"}
                onClick={() => {
                  filterChange("고가격순");
                }}
              >
                고가격순
              </p>
              <p
                className={filter === "베스트순" ? "active" : "inactive"}
                onClick={() => {
                  filterChange("베스트순");
                }}
              >
                베스트순
              </p>
            </div>
            <ItemWrapper>
              {isRecord ? (
                <>
                  {content.map(book => (
                    <RecordDetailItem
                      title={data.productName}
                      source={data.info}
                      type="음반"
                      price={book.price}
                      location={book.location}
                      state={book.status}
                      img={img}
                      itemId={book.itemId}
                    />
                  ))}
                </>
              ) : (
                <>
                  {content.map(book => (
                    <RecordDetailItem
                      title={data.productName}
                      source={data.info}
                      type="도서"
                      price={book.price}
                      location={book.location}
                      state={book.status}
                      img={img}
                      itemId={book.itemId}
                    />
                  ))}
                </>
              )}
            </ItemWrapper>
          </>
        ) : tab == "mid" ? (
          <Review />
        ) : (
          <></>
        )}
      </div>
    </DetailTabBox>
  );
};
export default DetailTab;

const DetailTabBox = styled.div`
  .detail-tab-name {
    width: 1200px;
    height: 63px;
    flex-shrink: 0;
    background: var(--01, #33afe9);
    display: flex;
    align-items: end;
  }

  .tab-name-false,
  .tab-name-first-false {
    display: flex;
    width: 265px;
    height: 55px;
    padding: 10px 25px 12px 25px;
    justify-content: center;
    align-items: center;
    background: var(--01, #33afe9);
    border: none;
    color: var(--00, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }
  .tab-name-first-left,
  .tab-name-mid,
  .tab-name-right {
    width: 265px;
    height: 55px;
    flex-shrink: 0;
    border-radius: 4px 4px 0px 0px;
    background: #fff;
    color: var(---, #3962ad);
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    cursor: pointer;
  }
  .tab-name-first-false,
  .tab-name-first-left {
    margin-left: 76px;
  }
  .tab-filter {
    display: flex;
    gap: 24px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 40px;
    margin-bottom: 40px;
    cursor: pointer;
  }
  .active {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .inactive {
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;
