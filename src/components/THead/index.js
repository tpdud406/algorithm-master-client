function THead() {
  return (
    <thead>
      <tr>
        {Array.from(["문제 제목", "내 런타임 (평균)", "통과여부", "결과"]).map(
          (element, index) => (
            <th key={index}>{element}</th>
          )
        )}
      </tr>
    </thead>
  );
}

export default THead;
