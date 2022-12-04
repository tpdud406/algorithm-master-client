function TBody({ submitedProblems, sumSubmitedRuntime }) {
  return (
    <tbody>
      {submitedProblems.map((submitedProblem, index) => (
        <tr key={index}>
          {Array.from([
            submitedProblem.title,
            submitedProblem.userAverages + " ms",
            submitedProblem.userAverages ? "통과" : "미통과",
            submitedProblem.userAverages
              ? `평균 런타임은 ${
                  submitedProblem.userAverages
                }ms 로 상위 ${Number(
                  (
                    (submitedProblem.userAverages / sumSubmitedRuntime[index]) *
                    100
                  ).toFixed(2)
                )}% 입니다`
              : "-",
          ]).map((element) => (
            <td key={element.problemId}>{element}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
