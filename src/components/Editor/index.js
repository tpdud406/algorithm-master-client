import { useState } from "react";
import styled from "styled-components";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

function Editor({ handleSolution }) {
  const [code, setCode] = useState(
    `function solution(a, b) {\n  return a + b;\n}`
  );

  return (
    <Wrapper>
      <CodeMirror
        value={code}
        height="50vh"
        theme="dark"
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
  height: 50vh;
  background-color: black;
`;
