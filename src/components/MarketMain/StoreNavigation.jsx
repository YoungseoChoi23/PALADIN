import React from "react";
import styled from "styled-components";
import List from "./List";
import { Button } from "../common/ButtonBlue";

const StoreNavigation = () => {
  return (
    <section>
      <Top>
        <div>
          <h2>중고매장</h2>
          <small>해당 지점명을 선택하면 보유도서를 검색할 수 있습니다.</small>
        </div>
        <MarketBtn>카카오맵에서 전국매장 조회하기</MarketBtn>
      </Top>
      <List title="서울" list={seoul} />
      <List title="경기" list={gyeonggi} />
      <List title="광역시" list={metropolitanCity} />
    </section>
  );
};

const Top = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  div {
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  }

  div > h2 {
    font-size: 20px;
    font-weight: 700;
  }

  div > small {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey2);
  }
`;

const MarketBtn = styled(Button)`
  width: 294px;
  font-size: 16px;
  font-weight: 700;
`;

const seoul = [
  "가로수길점",
  "강남점",
  "강서 홈플러스점",
  "건대점",
  "노원역점",
  "대학로점",
  "목동점",
  "서울대 입구역점",
  "수유점",
  "신림점",
  "신촌점",
  "연신내점",
  "영등포점",
  "이수역점",
  "잠실롯데 월드타워점",
  "잠실 새내역점",
  "종로점",
  "천호점",
  "합정점",
];
const gyeonggi = [
  "동탄 하나로마트점",
  "동탄점",
  "범계점",
  "부천점",
  "분당 서현점",
  "분당 야탑점",
  "산본점",
  "수원 시청역점",
  "수원점",
  "수지점",
  "의정부 홈플러스점",
  "일산점",
  "평택점",
  "화정점",
];
const metropolitanCity = [
  "광주 상무점",
  "광주 충장로점",
  "김해점",
  "대구 동성로점",
  "대구 상인점",
  "대전 시청역점",
  "대전 은행점",
  "동대구역점",
  "마산 합정점",
  "부산 경성대 부경대역점",
  "부산 덕천점",
  "부산 서면동보점",
  "부산 서면역점",
  "부산 센텀점",
  "울산점",
  "인천 계산 홈플러스점",
  "인천 구월점",
  "인천 송도점",
  "인천 청라점",
  "전주점",
  "창원 상남점",
  "천안신불당점",
  "청주점",
];

export default StoreNavigation;
