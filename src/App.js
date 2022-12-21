import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthProvider";
import Header from "./components/Header";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
