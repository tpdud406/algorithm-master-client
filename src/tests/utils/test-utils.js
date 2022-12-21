import { BrowserRouter, Routes } from "react-router-dom";
import { AuthContext } from "../../components/context/AuthContext";
import { AuthContextProvider } from "../../components/context/AuthProvider";
import { fakeUser as user } from "../user";
import { login, logout } from "../../services/firebase";

export function withRouter(routes, initialEntry = "/") {
  return (
    <BrowserRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export function withAllContexts(children) {
  jest.mock("../../services/firebase.js", () => ({
    login: jest.fn(),
    logout: jest.fn(),
  }));

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </AuthContext.Provider>
  );
}
