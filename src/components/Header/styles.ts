import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 30px 0;
  justify-content: center;
`;
export const Content = styled.div`
  max-width: 320px;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  img {
    height: 65px;
  }

  a {
    text-decoration: none;
  }

  /* @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    justify-content: space-between;
    img {
      height: 65px;
      margin-left: 0px;
    }
  } */
`;
