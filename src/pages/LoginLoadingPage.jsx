import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const LoginLoadingPage = () => {
  const [searchParams, _] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");

    if (accessToken) {
      localStorage.setItem("token", `Bearer ${accessToken}`);
      navigate("/");
      window.location.reload();
    } else {
      alert("로그인에 실패하였습니다.");
      navigate("/login");
    }
  }, []);

  return <div>로그인 중...</div>;
};

export default LoginLoadingPage;
