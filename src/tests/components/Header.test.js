import { render, screen, waitFor } from "@testing-library/react";
import Header from "../../components/Header";
import "@testing-library/jest-dom";
import { withAllContexts, withRouter } from "../utils/test-utils";
import { Route } from "react-router-dom";

describe("<Header />", () => {
  it("should see Algorithm Master", async () => {
    render(
      withAllContexts(withRouter(<Route path="/" element={<Header />} />))
    );

    await waitFor(async () => {
      const header = await screen.findByRole("heading");
      expect(header.textContent).toBe("Algorithm Master");
    });
    expect(screen.getByText("Algorithm Master")).toBeInTheDocument();
  });

  it("If you are logged out, you should see the login button", async () => {
    render(
      withAllContexts(withRouter(<Route path="/" element={<Header />} />))
    );

    await waitFor(async () => {
      const button = await screen.findByRole("button");
      expect(button.textContent).toBe("로그인");
    });
  });
});
