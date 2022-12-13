import styled from "styled-components";

function Problem({ title, description }) {
  return (
    <Wrapper>
      <h3>문제: {title}</h3>
      <p>
        문제 설명
        <br /> {description}
      </p>
    </Wrapper>
  );
}

export default Problem;

const Wrapper = styled.div`
  width: 50%;
  height: 45vh;
  border-bottom: none;
  border-right: 1px solid #d0d7de;

  h3 {
    padding: 0.3rem 1rem;
    border-bottom: 1px solid #d0d7de;
    background-color: #eaeef2;
    border-top-left-radius: 10px;
  }

  p {
    padding: 1rem;
  }
`;
