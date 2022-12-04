import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  const navigate = useNavigate();

  return (
    <BackGround>
      <Title>404</Title>
      <Text>잘못된 경로이거나 로그인이 필요합니다.</Text>
      <Button onClick={() => navigate("/")}>메인으로 되돌아가기</Button>
    </BackGround>
  );
}

export default NotFound;

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vmin;
`;

const Title = styled.div`
  margin: 2rem;
  font-size: 15rem;
`;

const Text = styled.div`
  margin: 2rem;
  font-size: 3rem;
`;

const Button = styled.button`
  cursor: pointer;
  width: 200px;
  height: 60px;
  margin: 0 auto;
  border-style: none;
  border-radius: 1rem;
  font-size: 1rem;

  &:hover {
    scale: 1.1;
  }
`;
