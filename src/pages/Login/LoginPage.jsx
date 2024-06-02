import React, { useState } from "react";
import styled from "styled-components";
import kakao_login from "../../assets/login/kakao_login.svg";
import Footer from "../../components/common/Footer";

const LoginPage = () => {
  const [checked, setChecked] = useState(false);

  const handlekakaoLogin = () => {
    window.location.href = process.env.REACT_APP_KAKAO_AUTH_URL;
  };

  return (
    <>
      <Wrapper>
        <p className="title">알라딘 회원 로그인</p>

        <LoginForm>
          <div className="inputs">
            <input className="id" placeholder="ID 또는 E-Mail " />
            <input className="pw" placeholder="비밀번호" />
          </div>
          <div className="btn">로그인</div>
        </LoginForm>

        <Options>
          <div>
            <div className="save">
              <input
                type="checkbox"
                checked={checked}
                onClick={() => setChecked(!checked)}
              />
              ID 또는 E-Mail 저장
            </div>
          </div>
          <div>비밀번호 찾기</div>
          <div>아이디 찾기</div>
        </Options>

        <p className="kakao-title">카카오 계정으로 로그인하기</p>

        <div className="kakao-btn" onClick={handlekakaoLogin}>
          <img src={kakao_login} alt="" />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;
  margin: 50vh auto 0;
  transform: translate(0, -50%);
  gap: 24px;

  .title {
    font-size: 24px;
    color: var(--black);
    font-weight: 700;
  }

  .kakao-title {
    font-size: 20px;
    color: var(--grey2);
    font-weight: 700;

    margin-top: 40px;
  }

  .kakao-btn {
    margin-top: -8px;
    cursor: pointer;
  }
`;

const LoginForm = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  input {
    display: flex;
    width: 290px;
    padding: 11px 10px 10px 16px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid var(--grey2);

    font-size: 16px;
    font-weight: 400;
  }

  .btn {
    display: flex;
    box-sizing: border-box;
    width: 86px;
    height: 88px;
    padding: 30px 11px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 4px;
    background: var(--pink);

    color: #ffffff;
    font-size: 20px;
    font-weight: 700;

    cursor: pointer;
  }
`;

const Options = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: var(--grey2);

  display: inline-flex;
  align-items: center;
  gap: 16px;

  .save {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
`;
