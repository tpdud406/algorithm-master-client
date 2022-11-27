import styled from "styled-components";

function User({ user: { photoURL, displayName } }) {
  return (
    <Wrapper>
      <img src={photoURL} alt={displayName} />
      <span>{displayName}</span>
    </Wrapper>
  );
}

export default User;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 1rem;
  }
`;
