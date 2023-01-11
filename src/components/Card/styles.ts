import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 322px;
  padding: 64px 30px 40px 30px;
  margin: 0 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  img {
    position: relative;
    width: 56px;
    height: 56px;
    bottom: 280px;
  }

  span {
    font-size: 24px;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: 0px;
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    color: var(--black);
  }

  p {
    padding-top: 24px;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: var(--gray);
  }

  a {
    position: relative;
    bottom: -40px;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--pink1);

    &:hover {
      opacity: 60%;
      transition: 200ms;
    }
  }
`