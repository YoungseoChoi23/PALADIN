import React from "react";
import styled from "styled-components";

const FooterBtn = ({ icon, text, icon2, isShort = false }) => {
  return (
    <Wrapper $isShort={isShort}>
      {icon && <img className="icon" src={icon} />}
      <p>{text}</p>
      {icon2 && <img className="icon2" src={icon2} />}
    </Wrapper>
  );
};

export default FooterBtn;

const Wrapper = styled.div`
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid var(--01, #e9e9e9);
  background: #fff;
  display: flex;
  width: ${props => (props.$isShort ? "144px" : "296px")};
  padding: 8px 40px;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  gap: 10px;

  .icon {
    width: 20px;
    height: 20px;
  }

  .icon2 {
    width: 4px;
    height: 8px;
  }
`;
