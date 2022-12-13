import styled from "styled-components";

function ResultTitle({ submitedProblems, passedCount }) {
  return (
    <Title>
      총 {submitedProblems.length} 문제 중 성공한 문제 수는 {passedCount}건
      입니다. (성공률:
      {Math.round((passedCount / submitedProblems.length) * 100 * 100) / 100} %)
    </Title>
  );
}

export default ResultTitle;

const Title = styled.h2`
  padding-bottom: 1.5rem;
`;
