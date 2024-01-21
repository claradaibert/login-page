import styled from "styled-components";

export const PageWrap = styled.div`
  width: 100%;
  background: linear-gradient(
    135deg,
    #1463f3 0%,
    #4982f7 0.01%,
    #84a4fc 18.03%,
    #d084fc 55.86%
  );
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    justify-content: flex-start;
    flex-direction: column-reverse;
  }
`;

export const Container = styled.div`
  width: 60%;
  background-color: ${({ theme }) => theme.background_primary_white};
  border-radius: 90px 0 0 90px;
  height: 110%;
  overflow: hidden;
  box-shadow: -20px 10px 30px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 80%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 90%;
    border-radius: 70px 70px 0 0;
    box-shadow: -20px -10px 30px 0px rgba(0, 0, 0, 0.2);
    justify-content: flex-start;
    padding-top: 4rem;
  }

  .pageTitle {
    font-size: 1.5rem;
    font-weight: 200;
    color: ${({ theme }) => theme.font_primary};
    margin-bottom: 2rem;

    @media screen and (max-width: 900px) {
      font-weight: 400;
    }
  }
`;
