import Detail from "../../components/detail/Detail";
import styled from "styled-components";
import DetailTab2 from "../../components/detail/DetailTap2";

const GoodsDetailPage = () => {
  return (
    <>
      <DetailStyle>
        <DetailWrapper>
          <Detail
            title_text="감쪽같은 수정테이프"
            title_more=""
            source="상품정보: 총 6m"
            stock="n부"
            lowest_price="7000원"
            regular_price=""
            type="상품"
          />
          <DetailTab2 />
        </DetailWrapper>
      </DetailStyle>
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
