import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ResultTitle from "../../components/ResultTitle";
import TBody from "../../components/Tbody";
import THead from "../../components/THead";

function SubmitedResult() {
  const { user_id } = useParams();
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
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_HOST}/users/${user_id}`
        );

        setResult(() => [...response.data]);
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
  background-color: #f9f9f9;
  height: 80vh;
  padding-left: 5rem;
  padding-top: 3rem;
  margin-top: 4rem;
  line-height: 1.5;
  text-align: center;
`;

const Table = styled.table`
  background-color: rgb(26, 28, 33);
  width: 1500px;
  margin: 0 auto;
  border: 1px solid black;
  border-collapse: collapse;
  color: white;
  text-align: center;
  font-size: 18px;

  tBody {
    background-color: white;
    color: #333d4b;
  }

  th,
  td {
    border: 1px solid black;
    padding: 10px;
  }
`;
