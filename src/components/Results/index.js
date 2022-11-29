import styled from "styled-components";

function Results({ solutionCode }) {
  return (
    <Wrapper>
      <h3>테스트 케이스 결과</h3>
      <button>결과보기</button>
      <div>결과들</div>
    </Wrapper>
  );
}

export default Results;

const Wrapper = styled.div`
  width: 50%;
  height: 50vh;
  padding: 1rem;
  background-color: limegreen;
`;
