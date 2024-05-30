import React, { useState } from "react";
import styled from "styled-components";

const Qna = () => {
  const [contents, setContents] = useState(buy);

  return (
    <Wrapper>
      <h2>중고매장 이용안내</h2>
      <RadioGroup>
        <input
          type="radio"
          id="radioButton1"
          name="qna"
          value="이렇게 삽니다."
          defaultChecked
          onChange={() => setContents(buy)}
        />
        <label htmlFor="radioButton1">이렇게 삽니다.</label>
        <input
          type="radio"
          id="radioButton2"
          name="qna"
          value="이렇게 팝니다."
          onChange={() => setContents(sell)}
        />
        <label htmlFor="radioButton2">이렇게 팝니다.</label>
        <input
          type="radio"
          id="radioButton3"
          name="qna"
          value="중고매장 FAQ"
          onChange={() => setContents(faq)}
        />
        <label htmlFor="radioButton3">중고매장 FAQ</label>
      </RadioGroup>
      <Article>
        {contents &&
          contents.map(item => {
            return (
              <ol key={`${Date.now()}-${Math.random()}`}>
                <li key={`${Date.now()}-${Math.random()}`}>
                  <b>{item.heading}</b>
                  <ul>
                    {item.text.map(sentence => {
                      return (
                        <li
                          className="sentence"
                          key={`${Date.now()}-${Math.random()}`}
                        >
                          {sentence}
                        </li>
                      );
                    })}
                    {item.emphasis && (
                      <li
                        className="sentence emphasis"
                        key={`${Date.now()}-${Math.random()}`}
                      >
                        {item.emphasis}
                      </li>
                    )}
                  </ul>
                </li>
              </ol>
            );
          })}
      </Article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

const RadioGroup = styled.fieldset`
  display: flex;
  flex-flow: row nowrap;

  input[type="radio"] {
    display: none;
  }
  label {
    width: 230px;
    padding: 8px 0;

    font-size: 12px;
    font-weight: 700;
    color: var(--blue3);
    text-align: center;

    border-bottom: 1px solid var(--blue3);
    background: var(--blue1);
  }
  input[type="radio"]:checked + label {
    border-top: 1px solid var(--blue3);
    border-right: 1px solid var(--blue3);
    border-left: 1px solid var(--blue3);
    border-bottom: none;
    background: white;
  }
`;

const Article = styled.article`
  padding: 16px 30px 40px 40px;

  b {
    margin: 8px 0 4px 0;
    display: block;
    width: fit-content;
    height: fit-content;

    font-size: 12px;
    font-weight: 700;
  }
  .sentence {
    font-size: 12px;
    font-weight: 400;
    list-style: inside "- ";
  }
  .emphasis {
    color: var(--pink);
  }
`;

const buy = [
  {
    heading: "01. 매입가격",
    text: [
      "보유 재고량, 상품상태, 신간 및 베스트셀러 여부에 따라 매입가격이 결정됩니다.",
      "단, 같은 도서를 5권이상 판매하시는 경우에는 구매처를 확인하는 절차가 있습니다.",
    ],
  },
  {
    heading: "02. 보유재고량에 따른 매입가격 차이",
    text: ["보유 재고량이 알라딘의 판매능력을 초과한 경우 사지 않습니다."],
  },
  {
    heading: "03. 상품 상태에 따른 매입가격 차이",
    text: [
      "상품 상태에 따라 <최상>, <상>, <중>, <매입불가>로 나뉩니다.",
      "5쪽 초과 메모, 제본 탈착, 구성품 누락, 2cm이상 찢어진 도서, 스크래치 CD는 <매입불가>입니다.",
      "2cm 초과하는 얼룩이 5쪽 초과한 도서는 책곰팡이 발생 우려가 있어 <매입불가>입니다.",
    ],
  },
  {
    heading: "04. 신간 베스트셀러 인센티브",
    text: [
      "출간일 14개월 이내의 일부 신간베스트셀러는 구간도서보다 비싸게 삽니다.",
      "알라딘에서 구매한 신간 베스트셀러는 추가 혜택이 있습니다.",
    ],
  },
  {
    heading: "05. 특수분야 및 특수유통상품 매입불가",
    text: [
      "전집류 / 캘린더 / 다이어리 / 시즌이 지난 수험서 및 컴퓨터 서적은 사지 않습니다.",
      "매년 개정되는 문제풀이 위주의 참고서는 사지 않습니다.",
      "요리 / 인문사회 / 과학 / 문예지 / 만화 / 예술 분야를 제외한 잡지 분야 상품은 사지 않습니다.",
      "알라딘에 등록되지 않은 상품은 사지 않습니다.",
    ],
    emphasis: "증정 도서/비매품은 사지 않습니다.",
  },
  {
    heading: "06. 온라인과 오프라인 매입 가격 동일",
    text: ["다만 보유재고량에 따라 변동하며, 상품상태에 따라 달라집니다."],
  },
];
const sell = [
  {
    heading: "01. 고객이 방금 팔고간 책",
    text: [
      "고객님이 오늘 매장에 방문, 판매한 책을 진열하였습니다.",
      "1일 5-7회 새로운 책이 진열됩니다.",
      "이 책들은 진열 후 분야별 서가로 이동합니다.",
    ],
  },
  {
    heading: "02. 오늘 들어온 책",
    text: [
      "고객님이 온라인 알라딘을 통해 판매한 책을 진열하였습니다.",
      "1일 1회 새로운 책이 입고됩니다.",
      "현재 진열된 책은 내일 오전 분야별 매장으로 이동합니다.",
    ],
  },
  {
    heading: "03. 알라딘 스페셜",
    text: [
      "중고서점의 인기 컬렉션별로 책을 진열하였습니다.",
      '"오늘 들어온 책", "고객이 방금 팔고간 책", "최상품질 중고가격", "출간일 1년 신간", "해시태그 추천 서가", "이 책의 다음 독자에게" 등의 컬렉션이 있습니다.',
    ],
  },
  {
    heading: "04. 검색/모바일 검색",
    text: [
      "매장검색대 위치는 매장안내도를 참고하십시오.",
      "모바일검색(off.aladin.co.kr)을 이용하시면 줄을 설 필요가 없습니다.",
      "다른 고객님이 보고계시는 경우 찾으시는 책이 없을 수 있습니다.",
    ],
  },
  {
    heading: "05. 다른 결제수단",
    text: [
      "온라인알라딘 적립금, 도서상품권, 문화상품권, 해피머니 상품권, S-oil 상품권",
    ],
  },
  {
    heading: "06. 7일 이내에 반품 가능",
    text: [
      "구매 다음 날 부터 7일 이내 구매 매장에 영수증 지참해 방문하시면 됩니다.",
      "온라인알라딘에 구매등록하신 경우 온라인알라딘에서 반품신청하십시오. (택배비 2,500원은 고객님이 부담)",
    ],
  },
];
const faq = [
  {
    heading: "01. 가까운 중고매장 위치/교통편이 궁금합니다.",
    text: [
      "상단의 원하시는 매장 클릭하시면 영업시간/보유 재고/위치/교통편/주차시설 등 관련 정보를 확인하실 수 있습니다.",
      "단, 전용 주차시설은 없으며 인근 유료주차장 혹은 대중교통을 이용해주십시오.",
    ],
  },
  {
    heading: "02. 중고매장 영업시간이 궁금합니다.",
    text: [
      "오전 09:30 ~ 오후 10시 까지이며, 설(음력 1월 1일),추석 명절 당일만 휴무입니다.",
    ],
  },
  {
    heading: "03. 중고매장을 방문해서 판매할 수 있습니까?",
    text: [
      '중고매장을 방문하여 "책 삽니다" 데스크에서 판매할 수 있습니다.',
      '매입 가능여부, 매입예상가는 방문 전 아래 페이지의 "중고팔기 예상가" 메뉴로 확인해보시기 바랍니다.',
      "단, 매입기준과 매입량에 따라 실시간 변동되므로,매입 가능 상품이라도 매장 방문 후 매입불가, 매입가 변동 가능성도 있습니다.",
    ],
  },
  {
    heading: "04. 어떤 책을 매입하지 않습니까?",
    text: [
      "상품성을 잃어버린 책은 사지 않습니다.",
      "① 젖은 책, 찢어진 책, 심한 낙서가 있는 책",
      "② 잡지, 참고서, 구판수험서 등 시즌성 책이나 알라딘 미등록 상품",
      "③ 일부 전집, 고서",
    ],
  },
  {
    heading: "05. 중고매장에 찾는 책이 있는지 미리 알 수 있습니까?",
    text: [
      "페이지 상단에 검색창에서 원하시는 매장 선택 후 상품명을 입력하시면, 매장에 판매중인 상품이면 검색결과가 나옵니다.",
    ],
  },
  {
    heading: "06. 중고매장 상품 재고예약(전화 혹은 인터넷)이 가능합니까?",
    text: ["실시간 매장판매가 이루어지므로 예약 구매는 서비스는 불가합니다."],
  },
  {
    heading: "07. 중고매장 구매상품 반품이 가능합니까?",
    text: [
      "구매 다음 날 부터 7일 이내 구매 매장에 영수증 지참해 방문하시면 됩니다.",
      "영수증을 분실하신 경우에는 상품 뒷면의 라벨이 부착되어 있으면 가능합니다.",
      "인터넷 주문상품의 중고매장 방문반품이나, 중고매장 구매 상품의 인터넷 반품은 불가하며, 각 구매처 반품방법을 이용하셔야 합니다.",
      "매장 구매상품의 다른 상품 교환은 불가하며, 매장 방문 후 반품,환불 받으신 후 새로 구매해주십시오.",
    ],
  },
];

export default Qna;
