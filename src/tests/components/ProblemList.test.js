import { render, screen, waitFor } from "@testing-library/react";
import { Route, useLocation } from "react-router-dom";
import ProblemList from "../../components/ProblemList";
import SolvingProblem from "../../pages/SolvingProblem";
import { fakeProblems as problems } from "../problems";
import { fakeUser as user } from "../user";
import { withRouter } from "../utils/test-utils";
import { getProblemList } from "../../services/axios";

jest.mock("../../services/axios.js", () => ({
  getProblemList: jest.fn(),
  getSolvingProblemList: jest.fn(),
}));

describe("<ProblemList />", () => {
  it("renders problems", async () => {
    render(withRouter(<Route path="/" element={<ProblemList />} />));

    expect(screen.getByRole("heading"));
    expect(screen.getByRole("link"));
    expect(screen.getByRole("listitem"));
  });

  it("it should have a title", async () => {
    getProblemList.mockReturnValue({ data: problems });

    render(
      withRouter(
        <>
          <Route path="/" element={<ProblemList />} />
          <Route
            path={`/users/${user._id}/problems/${problems[0]._id}`}
            element={<SolvingProblem />}
          />
        </>
      )
    );

    await waitFor(() => {
      expect(screen.getByText("문제 제목")).toBeInTheDocument();
    });
  });

  it("navigate to detailed problem when clicked", async () => {
    function LocationStateDisplay() {
      return <pre>{JSON.stringify(useLocation().state)}</pre>;
    }
    getProblemList.mockReturnValue({ data: problems });

    render(
      withRouter(
        <>
          <Route path="/" element={<ProblemList />} />
          <Route
            path={`/users/${user._id}/problems/${problems[0]._id}`}
            element={<LocationStateDisplay />}
          />
        </>
      )
    );

    await waitFor(() => {
      expect(screen.getByText(problems[0].title)).toBeInTheDocument();
    });
  });
});
