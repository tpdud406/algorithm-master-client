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
  height: 50vh;

  h3 {
    padding: 0.3rem 1rem;
    border: 1px solid gray;
  }
`;

const ErrorMessage = styled.div`
  font-size: 20px;
  font-weight: 800;
  padding: 0.3rem 1rem;
  color: red;
`;

const Button = styled.button`
  cursor: pointer;
  margin-left: 1rem;
  margin-top: 1rem;
  width: 100px;
  height: 50px;
  font-size: 18px;
  border-radius: 0.5rem;
  border-style: none;
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
