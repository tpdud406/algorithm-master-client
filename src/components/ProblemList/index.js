import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { GrAddCircle } from "react-icons/gr";

function ProblemList() {
  const { user_id } = useParams();
  const [problems, setProblems] = useState([]);

  useEffect(
    () => async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_HOST}/users/${user_id}/problems`
        );
        console.log("response", response);
        setProblems(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    []
  );

  console.log("problems", problems);
  return (
    <Wrapper>
      <h2>문제 제목</h2>
      {problems &&
        problems.map((problem, index) => (
          <Problem key={problem._id}>
            <span> {index + 1 + "."}</span>
            <Link to={`/users/${user_id}/problems/${problem._id}`}>
              {problem.title}
            </Link>
          </Problem>
        ))}
      <GrAddCircle />

      <Problem>
        <ProblemCreate to={`/users/${user_id}/problems/new`}>
          <GrAddCircle className="icon" />
          문제 만들기
        </ProblemCreate>
      </Problem>
    </Wrapper>
  );
}

export default ProblemList;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 15px;
  line-height: 50px;
  width: 90%;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 1px;

  h2 {
    padding-left: 5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #8b95a1;
    font-size: 30px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: #333d4b;
  }

  a:hover {
    scale: 1.1;
    color: #1b64da;
  }

  span {
    width: 40px;
  }
`;

const Problem = styled.li`
  display: flex;
  padding: 12px 16px;
  padding-left: 2rem;
  font-size: 25px;
  line-height: 200%;
`;

const ProblemCreate = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  background: #f9f9f9;
  border-radius: 20px;
  border: 1px solid #333d4b;
  padding: 0 2rem;

  .icon {
    margin-right: 0.5rem;
  }
`;
