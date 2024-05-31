import Detail from "../../components/detail/Detail";
import styled from "styled-components";
import DetailTab from "../../components/detail/DetailTap";
import { useState, useEffect } from "react";
import { ProductDetail, getProduct } from "../../services/api/example";
import { useParams } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const RecordDetailPage = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");

  const getRecordImgData = async productId => {
    if (productId) {
      const res = await getProduct();
      setImg(res.data.productTypes[1].products[productId - 7].items[0].imgPath);
    }
  };
  useEffect(() => {
    getRecordImgData(productId);
  }, [productId]);

  const getRecordDetailData = async productId => {
    if (productId) {
      const res = await ProductDetail({ productId });
      setData(res);
    }
  };

  useEffect(() => {
    getRecordDetailData(productId);
  }, [productId]);

  const lowestPriceItem = data.data
    ? data.data.items.items.reduce((minItem, currentItem) => {
        return currentItem.price < minItem.price ? currentItem : minItem;
      })
    : { price: 0 };

  return (
    <>
      <Header />
      <DetailStyle>
        <DetailWrapper>
          <Detail
            title_text={data.data && data.data.productName}
            title_more=""
            source={data.data && data.data.info}
            stock={data.data && data.data.stockQuantity}
            lowest_price={lowestPriceItem.price}
            regular_price={data.data && data.data.originalPrice}
            type="음반"
            location={data.data && lowestPriceItem.location}
            img={img}
          />
          <DetailTab isRecord={true} img={img} />
        </DetailWrapper>
      </DetailStyle>
      <Footer />
    </>
  );
};
export default RecordDetailPage;

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
