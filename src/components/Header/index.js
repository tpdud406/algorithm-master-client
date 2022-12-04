import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import User from "../User";
import Navbar from "./Navbar";
import { useAuthContext } from "../context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { user, login, logout } = useAuthContext();
  const [userId, setUserId] = useState();

  const handleLogin = async () => {
    try {
      const { user } = await login();
      const idToken = await user.getIdToken();

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOST}/auth/login`,
        {
          name: user.displayName,
          email: user.email,
        },
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );

      setUserId(response.data.user._id);
      navigate(`/users/${response.data.user._id}/problems`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <NavbarLink to="/">
        <h1>Algorithm Master</h1>
      </NavbarLink>
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
  justify-content: space-between;
  align-items: center;
  padding-left: 5rem;
  width: 100%;
  min-height: 4.5rem;
  border-bottom: 1px solid #f2f2f2;
  line-height: 1.5;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #333d4b;
  margin: 1rem;
  padding: 0.25rem 1rem;
  align-items: center;
  flex-basis: 60%;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 10rem;
  padding: 0.25rem 1rem;
  border-style: none;
  color: #333d4b;
  font-weight: bold;
  background: white;

  &:hover {
    scale: 1.1;
  }
`;
