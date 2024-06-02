import styled from "styled-components";
import stars from "../../assets/detail/stars.svg";
import small_stars from "../../assets/detail/small_stars.svg";
import add_photo from "../../assets/detail/add_photo.svg";
import ReviewItem from "./ReviewItem";
import { useState, useEffect } from "react";
import { CreateReview, GetReview } from "../../services/api/example";
import { useNavigate, useParams } from "react-router-dom";

const Review = () => {
  const [sort, setSort] = useState("최근순");
  const { productId } = useParams();
  const [reviewText, setReviewText] = useState("");
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleSort = sortName => {
    setSort(sortName === sort ? sort : sortName);
  };

  const handleReviewTextChange = event => {
    setReviewText(event.target.value);
  };
  const handleImageChange = event => {
    setImage(event.target.files[0]);
  };
  const accessToken = localStorage.getItem("paladintoken");

  const submitReview = async () => {
    if (!accessToken) {
      alert("로그인 후 이용가능합니다!");
      navigate("/login");
    } else {
      const reviewData = {
        content: reviewText,
        rating: 5,
        image: image,
      };

      const accessToken = localStorage.getItem("paladintoken");

      console.log("Submitting review with data:", reviewData);
      console.log("Using access token:", accessToken);
      setReviewText("");
      setImage(null);
      try {
        const response = await CreateReview({
          productId,
          reviewData,
          accessToken,
        });
        console.log("Review submitted successfully:", response);
      } catch (error) {
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
        console.error("Error submitting review:", error);
      }
    }
  };

  return (
    <>
      <ReviewWrapper>
        <div className="review-star">
          <div className="review-star-text">
            알라딘 온라인매장 구매 회원들이 평가한 평균 별점
          </div>
          <div className="avg-stars">
            <div>
              <img src={stars} />
            </div>
            <div className="star-calculate">"5.0/5.0"</div>
          </div>
        </div>
        <div className="review-input-box">
          <div className="review-input-stars-value">
            <div className="review-input-stars">
              <img src={small_stars} />
            </div>
            <input
              type="text"
              placeholder="해당 상품을 구매하셨나요? 감상평을 남겨주세요."
              onChange={handleReviewTextChange}
              value={reviewText}
            />
          </div>
          <button className="review-input-btn" onClick={submitReview}>
            작성하기
          </button>
        </div>

        <div className="add-photo">
          <div className="add-photo-text">사진 추가</div>
          <input type="file" onChange={handleImageChange} />
          <div>
            <img src={add_photo} />
          </div>
        </div>
        <div className="review-filter">
          <p
            className={sort === "최근순" ? "sort-active" : "sort-inactive"}
            onClick={() => {
              handleSort("최근순");
            }}
          >
            최근순
          </p>
          <p
            className={sort === "추천순" ? "sort-active" : "sort-inactive"}
            onClick={() => {
              handleSort("추천순");
            }}
          >
            추천순
          </p>
          <p
            className={sort === "별점순" ? "sort-active" : "sort-inactive"}
            onClick={() => {
              handleSort("별점순");
            }}
          >
            별점순
          </p>
        </div>
        {data.map(review => {
          return (
            <ReviewItem
              date={review.createdDate}
              content={review.content}
              img={review.imgPaths}
            />
          );
        })}
      </ReviewWrapper>
    </>
  );
};
export default Review;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .review-star {
    width: 405px;
    height: 95px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    margin: auto;
    margin-top: 44px;
  }
  .review-star-text {
    display: flex;
    width: 405px;
    height: 31px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(---, #010101);
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .avg-stars {
    display: flex;
    gap: 8px;
  }
  .star-calculate {
    display: flex;
    align-items: end;
    color: var(--02, #ea328f);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 15px;
  }
  .review-input-box {
    width: 1200px;
    height: 156px;
    flex-shrink: 0;
    border: none;
    background: var(--01, #e9e9e9);
    display: flex;
    margin-top: 45px;
  }

  .review-input-stars-value {
    display: flex;
    flex-direction: column;
  }
  .review-input-stars {
    margin-top: 21px;
    margin-bottom: 13px;
    display: flex;
    justify-content: end;
  }

  .review-input-box input {
    width: 942px;
    height: 77px;
    flex-shrink: 0;
    border: 0.6px solid #999999;
    background: var(--00, #fff);
    padding-left: 14px;
    margin-left: 20px;
    border: none;
  }
  .review-input-box input::placeholder {
    display: flex;
    width: 410px;
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
    transform: translateY(-15px);
  }

  .review-input-btn {
    width: 197px;
    height: 77px;
    flex-shrink: 0;
    border-radius: 4px;
    background: var(--02, #ea328f);
    color: var(--00, #fff);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    margin: auto;
    margin-top: 56px;
    cursor: pointer;
  }
  .add-photo {
    margin-top: 18px;
  }
  .add-photo-text {
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
    font-weight: 700;
    line-height: normal;
  }
  .review-filter {
    display: flex;
    justify-content: end;
    gap: 24px;
    margin-bottom: 24px;
  }
  .sort-active {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
  .sort-inactive {
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
`;
const ReviewItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
