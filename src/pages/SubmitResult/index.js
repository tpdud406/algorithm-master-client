import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";

function SubmitResult() {
  const { user_id } = useParams();
  const [result, setResult] = useState();
  console.log("result", result);

  useEffect(
    () => async () => {
      try {
        const response = axios.get(
          `${process.env.REACT_APP_SERVER_HOST}/users/${user_id}`
        );

        setResult(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    []
  );

  return (
    <div>
      <Header />
      <Main>
        <div>현재 ㅇㅇ님의 평균 런타임은 ㅇ초로 상위 ㅇ%입니다</div>
        <div>성공한 문제 수 : ㅇㅇ건</div>
      </Main>
      <div>타 가입자의 평균 런타임 : ㅇㅇ초</div>
    </div>
  );
}

export default SubmitResult;

const Main = styled.div`
  background-color: #f9f9f9;
  height: 50vh;
  align-items: center;
  padding-left: 5rem;
  padding-top: 5rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`;
