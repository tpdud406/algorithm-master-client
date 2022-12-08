import styled from "styled-components";

function Problem({ title, description }) {
  return (
    <Wrapper>
      <h2>제목: {title}</h2>
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
  height: 50vh;
  border-bottom: none;

  h2 {
    padding: 0.3rem 1rem;
    border: 1px solid gray;
  }
  p {
    padding: 1rem;
  }
`;
