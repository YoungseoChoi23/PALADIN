import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrowRight from "../../assets/S_main/arrow_right.svg";
import SecondHandItem from "./SecondHandItem";
import record1 from "../../assets/S_main/record1.svg";
import record2 from "../../assets/S_main/record2.svg";
import record3 from "../../assets/S_main/record3.svg";
import record4 from "../../assets/S_main/record4.svg";

const Record = () => {
  return (
    <RecordList>
      <div className="record-text">음반·비디오</div>
      <div className="record-items">
        <SecondHandItem
          book={record1}
          name="세븐틴 - SEVENTEEN
          BEST ALBUM ‘17 IS"
          price="23,400원"
          discount="11% 할인"
        />
        <SecondHandItem
          book={record2}
          name="세븐틴 - SEVENTEEN
          BEST ALBUM ‘17 IS"
          price="12,400원"
          discount="11% 할인"
        />
        <SecondHandItem
          book={record3}
          name="아이브 - 미니 2집 IVE
          SWITCH (PLVE ver.)"
          price="13,500원"
          discount="11% 할인"
        />
        <SecondHandItem
          book={record4}
          name="아이브 - 미니 2집 IVE
          SWITCH (Digipack"
          price="12,800원"
          discount="10% 할인"
        />
      </div>
    </RecordList>
  );
};
export default Record;

const RecordList = styled.div`
  .record-text {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 64px;
    margin-bottom: 39px;
  }
  .record-items {
    display: flex;
    gap: 30px;
  }
`;
