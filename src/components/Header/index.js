import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { login, logout, onUserStateChange } from "../../services/firebase";
import User from "../User";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const handleLogin = async () => {
    try {
      const { user } = await login();
      const idToken = await user.getIdToken();

      await axios.post(
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

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <Wrapper>
      <h1>Algorithm Master</h1>
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
  padding-left: 10rem;
  width: 100%;
  min-height: 4.5rem;
  border-bottom: 1px solid #f2f2f2;
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
    border-bottom: 1px solid #333d4b;
  }
`;
