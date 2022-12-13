import styled from "styled-components";

function Content() {
  return (
    <Wrapper>
      <p>
        알고리즘 연습하고
        <br />
        효율도 확인해보세요
      </p>
    </Wrapper>
  );
}

export default Content;

const Wrapper = styled.div`
  text-align: center;
  font-size: 60px;
  font-weight: 900;
  margin-top: 11rem;
  line-height: 1.5;
`;
