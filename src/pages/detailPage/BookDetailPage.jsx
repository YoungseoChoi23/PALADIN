import Detail from "../../components/detail/Detail";
import DetailTab from "../../components/detail/DetailTap";
import styled from "styled-components";

const BookDetailPage = () => {
  return (
    <>
      <DetailStyle>
        <DetailWrapper>
          <Detail
            title_text="도서 제목"
            title_more="[2022년 사회과학 분야 1위]"
            source="출판사/지은이"
            stock="n부"
            lowest_price="7000원"
            regular_price="13000원"
            type="도서"
          />
          <DetailTab isRecord={false} />
        </DetailWrapper>
      </DetailStyle>
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
