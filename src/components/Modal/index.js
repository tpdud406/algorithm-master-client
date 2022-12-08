import styled from "styled-components";

const Modal = ({ children }) => {
  return (
    <Background>
      <Content>{children}</Content>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 800px;
  padding: 1rem;
  background-color: #1a1c21;
  border-radius: 2rem;
  color: white;
  font-size: 1.5rem;
`;

export default Modal;
