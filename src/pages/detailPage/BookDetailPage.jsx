import { useState, useEffect } from "react";
import { ProductDetail, getProduct } from "../../services/api/example";
import Detail from "../../components/detail/Detail";
import DetailTab from "../../components/detail/DetailTap";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const BookDetailPage = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");

  const getBookDetailData = async productId => {
    if (productId) {
      const res = await ProductDetail({ productId });
      setData(res);
    }
  };

  useEffect(() => {
    getBookDetailData(productId);
  }, [productId]);

  const lowestPriceItem = data.data
    ? data.data.items.items.reduce((minItem, currentItem) => {
        return currentItem.price < minItem.price ? currentItem : minItem;
      })
    : { price: 0 };

  const getBookImgData = async productId => {
    if (productId) {
      const res = await getProduct();
      setImg(
        res.data.productTypes[0].products[productId - 2] &&
          res.data.productTypes[0].products[productId - 2].items[0].imgPath,
      );
    }
  };
  useEffect(() => {
    getBookImgData(productId);
  }, [productId]);
  return (
    <>
      <Header />
      <DetailStyle>
        <DetailWrapper>
          <Detail
            title_text={data.data && data.data.productName}
            title_more="[2022년 사회과학 분야 1위]"
            source={data.data && data.data.info}
            stock={data.data && data.data.stockQuantity}
            lowest_price={lowestPriceItem.price}
            regular_price={data.data && data.data.originalPrice}
            location={data.data && lowestPriceItem.location}
            type="도서"
            img={img}
            itemId={data.dat}
          />
          <DetailTab isRecord={false} img={img} />
        </DetailWrapper>
      </DetailStyle>
      <Footer />
    </>
  );
};
export default BookDetailPage;

const DetailStyle = styled.div`
  width: 1200px;
  margin: auto;
`;
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  padding-bottom: 212px;
`;
