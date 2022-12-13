import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Problem from "../../components/Problem";
import Editor from "../../components/Editor";
import Tests from "../../components/Tests";
import Results from "../../components/Results";
import { getSolvingProblemList } from "../../services/axios";

function SolvingProblem() {
  const { problem_id } = useParams();
  const [solutionCode, setSolutionCode] = useState("");
  const [problem, setProblem] = useState({});
  const { title, description, tests } = problem;

  useEffect(() => {
    const getSolvingProblems = async () => {
      try {
        const response = await getSolvingProblemList(
          localStorage.getItem("user_id"),
          problem_id
        );

        setProblem(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getSolvingProblems();
  }, []);

  return (
    <LayoutContainer>
      <Wrapper>
        <ContentTop>
          <Problem title={title} description={description} />
          <Editor handleSolution={setSolutionCode} />
        </ContentTop>
        <ContentBottom>
          {<Tests tests={tests} />}
          <Results solutionCode={solutionCode} />
        </ContentBottom>
      </Wrapper>
    </LayoutContainer>
  );
}

export default SolvingProblem;

const LayoutContainer = styled.div`
  max-width: 1400px;
  max-height: 650px;
  margin: 0 auto;
  border: 2px solid #d0d7de;
  border-radius: 0.5rem;
`;

const Wrapper = styled.div`
  font-size: 15px;
  line-height: 25px;
  display: flex;
  flex-direction: column;
`;

const ContentTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ContentBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
