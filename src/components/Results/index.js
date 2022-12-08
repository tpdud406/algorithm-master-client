import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function Results({ solutionCode }) {
  const { problem_id } = useParams();
  const [results, setResults] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOST}/users/${localStorage.getItem(
          "user_id"
        )}/problems/${problem_id}`,
        {
          solutionCode,
        }
      );

      setResults(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <h3>테스트 케이스 결과</h3>
      <button type="submit" onClick={handleSubmit}>
        결과보기
      </button>
      {(results && results.message && (
        <ErrorMessage>{results.message}</ErrorMessage>
      )) ||
        results.map((result, index) => (
          <Result key={index}>
            <span>테스트{index + 1}. </span>
            <span>{result.passed ? "통과 " : "실패 "}</span>
            <span>{result.runtime}ms</span>
          </Result>
        ))}
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

const ErrorMessage = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: red;
`;

const Result = styled.div`
  font-size: 18px;
`;
