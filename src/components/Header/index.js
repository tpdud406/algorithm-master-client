import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <h1>Algorithm Master</h1>
      <Button type="button">로그인</Button>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10rem;
  width: 100%;
  min-height: 4.5rem;
  border-bottom: 1px solid #f2f2f2;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 10rem;
  padding: 0.25rem 1rem;
  border-style: none;
  color: #333d4b;
  font-weight: bold;
  background: white;

  &:hover {
    scale: 1.1;
    border-bottom: 1px solid #333d4b;
  }
`;
