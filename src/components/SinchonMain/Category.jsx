import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  const navigate = useNavigate();
  const [activeButton, setactiveButton] = useState(1);

  const handleButtonClick = buttonId => {
    setactiveButton(buttonId === activeButton ? buttonId : buttonId);
  };

  const handlePage = () => {
    activeButton === 3 ? navigate("/list/music") : navigate("/list/book"); //도서 목록으로 이동
  };
  return (
    <CategoryBox>
      <div className="category-text">분야별 보기</div>
      <div className="category-box">
        <div className="box-col1">
          <button
            className={activeButton === 1 ? "active" : "inactive"}
            onClick={() => handleButtonClick(1)}
          >
            국내도서
          </button>
          <button
            className={activeButton === 2 ? "active" : "inactive"}
            onClick={() => handleButtonClick(2)}
          >
            외국도서
          </button>
          <button
            className={activeButton === 3 ? "active" : "inactive"}
            onClick={() => handleButtonClick(3)}
          >
            음반·비디오
          </button>
        </div>
        <div className="box-col2">
          <div className="box-col2-row1">
            <p onClick={handlePage}>건강/취미</p>
            <p onClick={handlePage}>경제경영</p>
            <p onClick={handlePage}>고전</p>
            <p onClick={handlePage}>과학</p>
            <p onClick={handlePage}>대학교재/전문서적</p>
          </div>
          <div className="inner-border"></div>

          <div className="box-col2-row2">
            <p onClick={handlePage}>만화</p>
            <p onClick={handlePage}>달력/기타</p>
            <p onClick={handlePage}>사회과학</p>
            <p onClick={handlePage}>소설/시/희곡</p>
            <p onClick={handlePage}>수험서/자격증</p>
          </div>
          <div className="inner-border"></div>

          <div className="box-col2-row3">
            <p onClick={handlePage}>어린이</p>
            <p onClick={handlePage}>에세이</p>
          </div>
        </div>
      </div>
    </CategoryBox>
  );
};
export default Category;

const CategoryBox = styled.div`
  .category-text {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 16px;
  }
  .category-box {
    width: 690px;
    height: 180px;
    border: 1px solid #9cb1d6;
    background: #fff;
    display: flex;
  }
  .box-col1 {
    display: flex;
    flex-direction: column;
  }
  .box-col1 button.inactive {
    display: flex;
    width: 78px;
    height: 60px;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    border: 1px solid #9cb1d6;
    background: var(----blue1);
    color: var(--blue3);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    flex-shrink: 0;
  }
  .box-col1 button.active {
    display: flex;
    width: 78px;
    height: 60px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    white-space: nowrap;
    background: var(--blue3);
    color: var(--00, #fff);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
  }
  .box-col2 {
    display: flex;
    flex-direction: column;
  }
  .box-col2-row1,
  .box-col2-row2,
  .box-col2-row3 {
    width: 612px;
    display: flex;
    justify-content: start;
  }
  .box-col2-row1 p,
  .box-col2-row2 p,
  .box-col2-row3 p {
    width: 116px;
    text-align: center;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .inner-border {
    width: 560px;
    height: 1px;
    background: var(--grey1);
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
  }

  .box-col2 {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
