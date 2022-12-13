import styled from "styled-components";

function ResultTitle({ submitedProblems, passed }) {
  return (
    <Title>
      총 {submitedProblems.length} 문제 중 성공한 문제 수는 {passed}건 입니다.
      (성공률: {(passed / submitedProblems.length) * 100} %)
    </Title>
  );
}

export default ResultTitle;

const Title = styled.h2`
  padding-bottom: 1.5rem;
`;
