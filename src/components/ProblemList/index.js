import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GrAddCircle } from "react-icons/gr";
import { getProblemList } from "../../services/axios";

function ProblemList() {
  const user_id = localStorage.getItem("user_id");
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const getProblems = async () => {
      try {
        const response = await getProblemList(user_id);
        setProblems(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProblems();
  }, []);

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
  width: 90%;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 1px;

  h2 {
    padding-left: 5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #8b95a1;
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
  font-size: 18px;
`;

const ProblemCreate = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  background: #f9f9f9;
  border-radius: 20px;
  border: 1px solid #333d4b;
  padding: 0.3rem 1rem;
  text-decoration: none;

  .icon {
    margin-right: 0.5rem;
    color: white;
  }
`;
