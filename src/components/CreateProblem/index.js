import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Modal from "../Modal";
import ModalPortal from "../Modal/ModalPortal";

function CreateProblem() {
  const { user_id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    testDescription: "",
    testInput: "",
    tesOutput: "",
    testDescription1: "",
    testInput1: "",
    tesOutput1: "",
  });
  const {
    title,
    description,
    testDescription,
    testInput,
    tesOutput,
    testDescription1,
    testInput1,
    tesOutput1,
  } = inputs;

  const onChange = (event) => {
    const { value, name } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleCreateSubmit = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_HOST}/users/${user_id}/problems`,
        {
          inputs,
        }
      );

      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ModalPortal>
      <Modal>
        <Title>문제 생성</Title>
        <Form>
          <ProblemTitle>
            <label>문제 제목</label>
            <input name="title" onChange={onChange} value={title} />
          </ProblemTitle>
          <Description>
            <label>문제 설명</label>
            <input name="description" onChange={onChange} value={description} />
          </Description>
          <TestCode>
            <label>테스트코드</label>
            <input
              name="testDescription"
              onChange={onChange}
              value={testDescription}
              placeholder="테스트에 대한 설명 입력해주세요 ex)인수가 1이면 2가 출력되어야 한다."
            />
            <InputOutput>
              <input
                name="testInput"
                onChange={onChange}
                value={testInput}
                placeholder="인수를 입력해주세요 ex)1"
              />
              <input
                name="tesOutput"
                onChange={onChange}
                value={tesOutput}
                placeholder="출력 값을 입력해주세요 ex)2"
              />
            </InputOutput>
            <input
              name="testDescription1"
              onChange={onChange}
              value={testDescription1}
              placeholder="테스트에 대한 설명 입력해주세요 ex)인수가 2이면 3가 출력되어야 한다."
            />
            <InputOutput>
              <input
                name="testInput1"
                onChange={onChange}
                value={testInput1}
                placeholder="인수를 입력해주세요 ex)2"
              />
              <input
                name="tesOutput1"
                onChange={onChange}
                value={tesOutput1}
                placeholder="출력 값을 입력해주세요 ex)3"
              />
            </InputOutput>
          </TestCode>
          <Button type="submit" onClick={handleCreateSubmit}>
            생성하기
          </Button>
        </Form>
      </Modal>
    </ModalPortal>
  );
}

export default CreateProblem;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
`;

const Form = styled.form`
  margin: 2rem;

  input {
    height: 5vmin;
    border-radius: 0.8rem;
    font-size: 1.2rem;
    padding-left: 1rem;
  }
`;

const ProblemTitle = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
`;

const Description = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
`;

const TestCode = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
`;

const Button = styled.button`
  display: flex;
  border-radius: 1rem;
  border-style: none;
  padding: 0.7rem;
  margin: 0 auto;
  font-size: 1.2rem;
  background-color: #c0c0c0;
`;

const InputOutput = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 45%;
  }
`;
