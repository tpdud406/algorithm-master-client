function TBody({ submitedProblems, sumSubmitedRuntime }) {
  const calculateRanking = (userAverage, sumAverage) => {
    return Math.round((userAverage / sumAverage) * 100 * 100) / 100;
  };

  return (
    <tbody>
      {submitedProblems.map((submitedProblem, index) => (
        <tr key={index}>
          {Array.from([
            submitedProblem.title,
            submitedProblem.isPass
              ? submitedProblem.userAverages + " ms"
              : "0 ms",
            submitedProblem.isPass ? "통과" : "미통과",
            submitedProblem.isPass
              ? `평균 런타임은 ${
                  submitedProblem.userAverages
                }ms 로 상위 ${calculateRanking(
                  submitedProblem.userAverages,
                  sumSubmitedRuntime[index]
                )}% 입니다`
              : "-",
          ]).map((element, index) => (
            <td key={index}>{element}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
