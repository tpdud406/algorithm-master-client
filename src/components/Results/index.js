import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { postSolution } from "../../services/axios";

function Results({ solutionCode }) {
  const { problem_id } = useParams();
  const [results, setResults] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await postSolution(
        localStorage.getItem("user_id"),
        problem_id,
        solutionCode
      );
      setResults(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <h3>테스트 케이스 결과</h3>
      {(results && results.message && (
        <ErrorMessage>{results.message}</ErrorMessage>
      )) ||
        results.map((result, index) => (
          <Result key={index}>
            <span>테스트{index + 1}. </span>
            <span className={result.passed ? "success" : "fail"}>
              {result.passed ? "통과" : "실패"}
            </span>
            <span> {result.runtime} ms</span>
          </Result>
        ))}
      <Button type="submit" onClick={handleSubmit}>
        결과보기
      </Button>
    </Wrapper>
  );
}

export default Results;

const Wrapper = styled.div`
  width: 50%;
  height: 40vh;
  border-bottom-right-radius: 10px;

  h3 {
    padding: 0.3rem 1rem;
    border: 1px solid #d0d7de;
    background-color: #eaeef2;
  }
`;

const ErrorMessage = styled.div`
  font-size: 15px;
  font-weight: 800;
  padding: 0.3rem 1rem;
  color: red;
`;

const Button = styled.button`
  cursor: pointer;
  margin-left: 1rem;
  margin-top: 1rem;
  width: 90px;
  height: 40px;
  font-size: 15px;
  border-radius: 0.5rem;
  border-style: none;
  background-color: #0969da;
  color: white;
`;

const Result = styled.div`
  font-size: 18px;
  margin: 1rem;

  .success {
    background-color: green;
    border-radius: 0.5rem;
    padding: 3px;
    color: white;
  }

  .fail {
    background-color: red;
    border-radius: 0.5rem;
    padding: 3px;
    color: white;
  }
`;
