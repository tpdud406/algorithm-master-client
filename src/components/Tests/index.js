import styled from "styled-components";

function Tests({ tests }) {
  return (
    <Wrapper>
      <h3>테스트케이스</h3>
      {tests &&
        tests.map((test, index) => (
          <div key={index}>
            <p>
              {index + 1 + ". " + test.description}
              <br />
              <span>
                {">>"} 인수: {test.input} / 결과: {test.output}
              </span>
            </p>
          </div>
        ))}
    </Wrapper>
  );
}

export default Tests;

const Wrapper = styled.div`
  width: 50%;
  height: 40vh;
  font-size: 15px;
  border-right: 1px solid #d0d7de;
  border-bottom-left-radius: 10px;

  h3 {
    padding: 0.3rem 1rem;
    border: 1px solid #d0d7de;
    margin-top: -1px;
    margin-right: -1px;
    background-color: #eaeef2;
  }

  p {
    padding-left: 1rem;
    padding-top: 1rem;

    span {
      padding-left: 1.5rem;
    }
  }
`;
