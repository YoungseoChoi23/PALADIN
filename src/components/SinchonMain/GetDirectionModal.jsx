import close from "../../assets/S_main/close.svg";
import styled from "styled-components";

const GetDirectionModal = ({ img, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <img src={img} />
            <img className="close" src={close} onClick={onClose} />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 배경을 흐리게 처리 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  top: 200px;
  display: flex;
  margin: 0;
  .close {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

export default GetDirectionModal;
