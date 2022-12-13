import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar({ user_id }) {
  return (
    <Nav>
      <NavbarLink to={`/users/${user_id}`}>내 통계</NavbarLink>
      <NavbarLink to={`/users/${user_id}/problems`}> 문제풀기</NavbarLink>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 0.25rem 1.5rem;
  border-style: none;
  font-weight: bold;
  margin-right: 4rem;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  color: #333d4b;
  margin-right: 2rem;

  &:hover {
    scale: 1.1;
  }
`;
