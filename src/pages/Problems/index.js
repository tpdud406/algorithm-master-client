import styled from "styled-components";
import Header from "../../components/Header";
import ProblemList from "../../components/ProblemList";

function Problems() {
  return (
    <>
      <Header />
      <ContentHeader>
        <h1>알고리즘 문제리스트</h1>
        <p>다양한 알고리즘을 풀어보고, 효율을 비교해보세요!</p>
      </ContentHeader>
      <ProblemList />
    </>
  );
}

export default Problems;

const ContentHeader = styled.header`
  background-color: #f9f9f9;
  height: 25vh;
  align-items: center;
  padding-left: 5rem;
  padding-top: 5rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  line-height: 1.5;

  p {
    font-size: 1.4rem;
  }
`;
