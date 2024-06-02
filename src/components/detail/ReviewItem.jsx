import styled from "styled-components";
import small_stars from "../../assets/detail/small_stars.svg";
import deleteImg from "../../assets/detail/delete.svg";
import { useState } from "react";
import { DeleteReview } from "../../services/api/example";

const ReviewItem = ({ date, content, img, reviewId, onDelete }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDeleteClick = async () => {
    try {
      await DeleteReview({ reviewId });
      setIsVisible(false);
      if (onDelete) {
        onDelete(reviewId);
      }
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };
  return (
    <>
      {isVisible && (
        <ReviewItemWrapper>
          <div
            className={`review-item-${img && img.length > 0 ? "big" : "small"}`}
          >
            <div className="date-stars">
              <div className="review-item-date">{date}</div>
              <div className="review-item-img">
                <img src={small_stars} />
              </div>
            </div>
            <div className="review-item-content">{content}</div>
            {img && img.length > 0 ? (
              <img className="images" src={img} />
            ) : (
              <></>
            )}
            <div className="review-delete">
              <img src={deleteImg} onClick={handleDeleteClick} />
            </div>
          </div>
        </ReviewItemWrapper>
      )}
    </>
  );
};
export default ReviewItem;

const ReviewItemWrapper = styled.div`
  .review-item-small {
    width: 1200px;
    height: 156px;
    flex-shrink: 0;
    border: none;
    background: var(--01, #e9e9e9);
    box-sizing: border-box;
    padding-top: 21px;
    padding-left: 26px;
    margin-bottom: 36px;
  }
  .review-item-big {
    width: 1200px;
    height: 370px;
    flex-shrink: 0;
    border: none;
    background: var(--01, #e9e9e9);
    box-sizing: border-box;
    padding-top: 21px;
    padding-left: 26px;
    margin-bottom: 36px;
  }
  .date-stars {
    display: flex;
    justify-content: space-between;
  }
  .review-item-date {
    display: flex;
    width: 86px;
    height: 31px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--02, #999);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .review-item-img {
    margin-right: 22px;
  }
  .review-item-content {
    display: flex;
    width: 95px;
    height: 31px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(---, #010101);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 8px;
  }
  .images {
    display: flex;
    gap: 20px;
    margin-top: 15px;
    width: 216px;
    height: 216px;
  }
  .review-delete {
    display: flex;
    justify-content: end;
    margin-right: 22px;
    cursor: pointer;
  }
`;
