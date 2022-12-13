import { useState, useEffect } from "react";
import styled from "styled-components";
import ResultTitle from "../../components/ResultTitle";
import TBody from "../../components/Tbody";
import THead from "../../components/THead";
import { getSubmitedProblemList } from "../../services/axios";

function SubmitedResult() {
  const [result, setResult] = useState();
  const { submitedProblems } = result || [];
  const sumSubmitedRuntime = [];
  let passed = 0;

  submitedProblems &&
    submitedProblems.forEach((submitedProblem) => {
      submitedProblem.userAverages && (passed += 1);

      sumSubmitedRuntime.push(
        [...new Set(submitedProblem.averageRuntimes)].reduce((acc, cur) => {
          return acc + cur;
        }, 0)
      );
    });

  useEffect(() => {
    const getSubmitResult = async () => {
      try {
        const response = await getSubmitedProblemList(
          localStorage.getItem("user_id")
        );
        setResult(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getSubmitResult();
  }, []);

  return (
    <Main>
      {submitedProblems && (
        <ResultTitle submitedProblems={submitedProblems} passed={passed} />
      )}
      <Table>
        <THead />
        {submitedProblems && (
          <TBody
            submitedProblems={submitedProblems}
            sumSubmitedRuntime={sumSubmitedRuntime}
          />
        )}
      </Table>
    </Main>
  );
}

export default SubmitedResult;

const Main = styled.div`
  max-height: 650px;
  background-color: #f9f9f9;
  padding-top: 1rem;
  text-align: center;
`;

const Table = styled.table`
  background-color: #1a1c21;
  width: 1200px;
  margin: 0 auto;
  border: 1px solid black;
  border-collapse: collapse;
  color: white;
  text-align: center;
  font-size: 15px;

  tBody {
    background-color: white;
    color: #333d4b;
  }

  th,
  td {
    border: 1px solid black;
    padding: 8px;
  }
`;
