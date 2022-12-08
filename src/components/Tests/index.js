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
  height: 50vh;
  font-size: 20px;
  border: 1px solid gray;

  h3 {
    padding: 0.3rem 1rem;
    border: 1px solid gray;
    margin-top: -1px;
    margin-right: -1px;
  }

  p {
    padding-left: 1rem;

    span {
      padding-left: 1.5rem;
    }
  }
`;
