import cross_section_part from "../../assets/detail/cross_section_part.svg";
import styled from "styled-components";

const Detail = ({
  img,
  title_text,
  title_more,
  source,
  stock,
  lowest_price,
  regular_price,
  type,
}) => {
  return (
    <DetailBox>
      <div className="detail-top">
        <div className="detail-top-left">
          <div className={`detail-img-${type}`}>{img}</div>
          <div className="detail-text1">
            <div className="title">
              <div className="title-text">{title_text}</div>
              <div className="title-more">{title_more}</div>
            </div>
            <div className="source">{source}</div>
            {type === "도서" || type === "상품" ? (
              <>
                <div className="stock-location">
                  <div className="stock">
                    <p className="stock-text"></p>재고:
                    <p className="stock-value">{stock}</p>{" "}
                  </div>
                  <div className="location">
                    {type} 위치: <p>A17</p> (위에서부터 4번째칸)
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="stock">
                  <p className="stock-text"></p>재고:
                  <p className="stock-value">{stock}</p>{" "}
                </div>
              </>
            )}
            <div className="lowest-price">
              <p className="lowest-price-text"> 최저가: </p>
              <p className="lowest-price-value">{lowest_price}</p>
            </div>
            {type === "도서" ? (
              <>
                <div className="regular-price">정가: {regular_price}</div>
              </>
            ) : (
              <></>
            )}
            {type === "상품" ? (
              <div className="buttons">
                <button className="online-purchase">온라인 구매</button>
                <button className="add-cart">장바구니 추가</button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={`detail-text2`}>
            {type === "음반" ? (
              <>
                <div className="location">
                  {type} 위치: <p>A17</p> (위에서부터 4번째칸)
                </div>
                <div className="regular-price">정가: {regular_price}</div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="cross-section-img">
          <div>신촌점 서가 단면도</div>
          <img src={cross_section_part} />
        </div>
      </div>
    </DetailBox>
  );
};
export default Detail;

const DetailBox = styled.div`
  .detail-top {
    display: flex;
    justify-content: space-between;
  }
  .detail-top-left {
    height: 181px;
    display: flex;
    justify-content: start;
    margin-top: 51px;
  }
  .detail-text1 {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 24px;
    gap: 20px;
  }
  .detail-text2 {
    display: flex;
    flex-direction: column;
    margin-left: 48px;
    justify-content: end;
    gap: 20px;
    margin-bottom: 44px;
  }

  .detail-img-음반 {
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    background: #d9d9d9;
  }
  .detail-img-상품 {
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    background: #d9d9d9;
  }
  .detail-img-도서 {
    width: 180px;
    height: 240px;
    flex-shrink: 0;
    background: #d9d9d9;
  }
  .title {
    display: flex;
    gap: 16px;
  }
  .title-text {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: start;
  }
  .title-more {
    color: var(--02, #ea328f);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .lowest-price {
    display: flex;
    align-items: center;
  }
  .stock {
    display: flex;
    align-items: center;
  }
  .stock-location {
    display: flex;
    gap: 80px;
  }
  .source,
  .stock-text,
  .lower-price,
  .regular-price-text,
  .location {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .location {
    display: flex;
    gap: 3px;
  }
  .location p {
    color: var(--02, #ea328f);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .stock-value {
    color: var(---, #3962ad);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 3px;
  }

  .lowest-price-value {
    color: var(--02, #ea328f);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 3px;
  }
  .cross-section-img {
    margin-top: 40px;
  }
  .cross-section-img div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: end;
  }

  .buttons {
    display: flex;
    gap: 24px;
    margin-top: 35px;
  }
  .online-purchase {
    display: inline-flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: var(--02, #ea328f);
    color: var(--00, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    cursor: pointer;
  }
  .add-cart {
    display: inline-flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--02, #ea328f);
    background: var(--00, #fff);
    color: var(--02, #ea328f);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
`;
