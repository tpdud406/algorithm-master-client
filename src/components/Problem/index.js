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
  padding: 1rem;
  background-color: pink;

  p {
    padding-top: 1rem;
  }
`;
