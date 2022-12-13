import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import User from "../User";
import Navbar from "./Navbar";
import { useAuthContext } from "../context/AuthContext";
import { postAuth } from "../../services/axios";
import { SiFuturelearn } from "react-icons/si";

function Header() {
  const navigate = useNavigate();
  const { user, login, logout } = useAuthContext();
  const [userId, setUserId] = useState();

  const handleLogin = async () => {
    try {
      const { user } = await login();
      const idToken = await user.getIdToken();
      const response = await postAuth(idToken, user);

      setUserId(response.data.user._id);
      localStorage.setItem("user_id", response.data.user._id);
      navigate(`/users/${response.data.user._id}/problems`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("user_id");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <h1>
        <SiFuturelearn className="icon" />
        Algorithm Master
      </h1>
      <Navbar user_id={userId} />
      {user && <User user={user} />}
      {!user && (
        <Button type="button" onClick={handleLogin}>
          로그인
        </Button>
      )}
      {user && (
        <Button type="button" onClick={handleLogout}>
          로그아웃
        </Button>
      )}
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5rem;
  width: 100%;
  min-height: 4rem;
  border-bottom: 2px solid #eaeef2;
  line-height: 1.5;

  .icon {
    margin-right: 0.5rem;
  }

  h1 {
    color: #333d4b;
    margin: 1rem;
    align-items: center;
    flex-basis: 60%;
  }
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border-style: none;
  color: #333d4b;
  font-weight: bold;
  background: white;
  margin-left: 1rem;

  &:hover {
    scale: 1.1;
  }
`;
