import { render, screen } from "@testing-library/react";
import Problem from "../../components/Problem";

describe("<Problem />", () => {
  const problem = {
    _id: "1234",
    author: "0000",
    title: "title",
    description: "description",
    tests: [
      {
        description: "test description",
        input: "solution(1)",
        output: 1,
        _id: "aaaa",
      },
      {
        description: "test description2",
        input: "solution(2)",
        output: 2,
        _id: "bbbb",
      },
    ],
    averageRuntimes: [0.1, 0.2, 0.3],
  };
  const { title, description } = problem;

  it("renders problem title and description", async () => {
    render(<Problem title={title} description={description} />);

    expect(screen.getByRole("heading"));
    expect(screen.getByText(`문제: ${title}`)).toBeInTheDocument();
    expect(screen.getByText(`문제 설명 ${description}`)).toBeInTheDocument();
  });
});
