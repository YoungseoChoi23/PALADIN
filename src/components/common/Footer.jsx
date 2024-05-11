import React from "react";
import styled from "styled-components";
import FooterBtn from "./FooterBtn";

import footer_escrow from "../../assets/common/footer/footer_escrow.svg";
import location from "../../assets/common/footer/location.svg";
import arr from "../../assets/common/footer/arr.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="top">
        <p>회사소개</p>
        <p>채용안내</p>
        <p>이용약관</p>
        <p>개인정보처리방침</p>
        <p>청소년 보호정책</p>
        <p>중고매장</p>
        <p>제휴·마케팅 안내</p>
        <p>판매자·매니저</p>
        <p>출판사·공급사 안내</p>
        <p>광고 안내</p>
        <p>학교·기업·기관 대량구매</p>
      </div>

      <div className="bottom">
        <Container>
          <p className="title">(주)알라딘커뮤니케이션 중고매장</p>

          <div className="info">
            <p>
              영업시간: 9:30 ~ 22:00 (명절 당일 휴무) / 지점별 영업시간에 차이가
              있으니 자세한 안내는 지점별 상세 페이지 참고
            </p>
            <div className="line2">
              <p>대표이사 최우경</p>
              <p>고객정보보호 책임자 최우경</p>
              <p>사업자등록 201-81-23094</p>
              <p>통신판매업신고 중구01520호</p>
            </div>
            <div className="line3">
              <p>이메일 privacy@aladin.co.kr</p>
              <p>호스팅 제공자 알라딘커뮤니케이션</p>
              <p>(본사) 서울시 중구 서소문로 89-31</p>
            </div>
            <p className="grey">ⓒ Aladin Communication. All Rights Reserved.</p>
          </div>

          <FooterBtn
            icon={footer_escrow}
            text={"중고매장 위치, 영업시간 안내"}
            icon2={arr}
          />
        </Container>

        <Container>
          <p className="title">고객센터 1544-2514 (발신자 부담)</p>

          <p>서울시 마포구 백범로 71 숨도빌딩 7층 Fax 02-6926-2600</p>

          <Btns>
            <div className="row">
              <FooterBtn text={"1:1 문의"} isShort={true} />
              <FooterBtn text={"FAQ"} isShort={true} />
            </div>

            <FooterBtn icon={location} text={"중고매장 위치, 영업시간 안내"} />
          </Btns>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--black);

  .top {
    width: 100%;
    border-top: 1px solid var(--grey1);
    padding: 24px 0;
    display: flex;
    gap: 24px;
    justify-content: center;
  }

  .bottom {
    width: 100%;
    border-top: 1px solid var(--grey1);
    padding: 24px 0;
    display: flex;
    justify-content: center;
    gap: 118px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .title {
    font-size: 16px;
    font-weight: 700;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .line2 {
      display: flex;
      gap: 16px;
    }

    .line3 {
      display: flex;
      gap: 33px;
    }

    .grey {
      color: var(--grey2);
    }
  }
`;

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .row {
    display: flex;
    gap: 8px;
  }
`;
