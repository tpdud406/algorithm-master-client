import { useState } from "react";
import styled from "styled-components";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { sublime } from "@uiw/codemirror-theme-sublime";

function Editor({ handleSolution }) {
  const [code, setCode] = useState(
    `function solution(a, b) {\n  return a + b;\n}`
  );

  return (
    <Wrapper>
      <h3>Solution.js</h3>
      <CodeMirror
        value={code}
        height="40.1vh"
        theme={sublime}
        extensions={[javascript()]}
        onChange={(value, viewUpdate) => {
          setCode(value);
          handleSolution(value);
        }}
      />
    </Wrapper>
  );
}

export default Editor;

const Wrapper = styled.div`
  width: 50%;
  height: 45vh;

  h3 {
    padding: 0.3rem 1rem;
    border-bottom: 1px solid #d0d7de;
    background-color: #eaeef2;
    border-top-right-radius: 10px;
  }
`;
