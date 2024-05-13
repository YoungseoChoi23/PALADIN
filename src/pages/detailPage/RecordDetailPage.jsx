import Detail from "../../components/detail/Detail";
import DetailTab from "../../components/detail/DetailTap";
import styled from "styled-components";

const RecordDetailPage = () => {
  return (
    <>
      <DetailStyle>
        <DetailWrapper>
          <Detail
            title_text="음반 제목"
            title_more=""
            source="가수/발매사"
            stock="n부"
            lowest_price="7000원"
            regular_price="13500원"
            type="음반"
          />
          <DetailTab />
        </DetailWrapper>
      </DetailStyle>
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
