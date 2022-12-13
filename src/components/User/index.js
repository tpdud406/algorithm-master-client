import styled from "styled-components";

function User({ user: { photoURL, displayName } }) {
  return (
    <Wrapper>
      <img src={photoURL} alt={displayName} />
      <span>{displayName} 님</span>
    </Wrapper>
  );
}

export default User;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-right: 0.5rem;
  }

  span {
    font-weight: bold;
    color: #333d4b;
  }
`;
