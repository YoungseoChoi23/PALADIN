import Detail from "../../components/detail/Detail";
import styled from "styled-components";
import DetailTab2 from "../../components/detail/DetailTap2";
import { useState, useEffect } from "react";
import { ProductDetail, getProduct } from "../../services/api/example";
import { useParams } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const GoodsDetailPage = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");

  const getGoodsDetailData = async productId => {
    if (productId) {
      const res = await ProductDetail({ productId });
      setData(res);
    }
  };

  useEffect(() => {
    getGoodsDetailData(productId);
  }, [productId]);

  const lowestPriceItem = data.data
    ? data.data.items.items.reduce((minItem, currentItem) => {
        return currentItem.price < minItem.price ? currentItem : minItem;
      })
    : { price: 0 };

  const getGoodsImgData = async productId => {
    if (productId) {
      const res = await getProduct();
      setImg(res.data.productTypes[2].products[productId - 1].items[0].imgPath);
    }
  };
  useEffect(() => {
    getGoodsImgData(productId);
  }, [productId]);

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
            location={data.data && lowestPriceItem.location}
            type="상품"
            img={img}
            itemId={data.data && data.data.items.items[0].itemId}
          />
          <DetailTab2 />
        </DetailWrapper>
      </DetailStyle>
      <Footer />
    </>
  );
};
export default GoodsDetailPage;

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
