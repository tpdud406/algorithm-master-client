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
  padding: 1rem;
  background-color: skyblue;
  font-size: 20px;

  span {
    padding-left: 1.5rem;
  }
`;
