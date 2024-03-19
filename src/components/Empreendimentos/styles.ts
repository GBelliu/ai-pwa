import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: fit-content;
  padding: 30px 0;
  justify-content: center;
  align-items: center;
  gap: 25px;

  h1 {
    color: #fff;
    font-weight: 600;
    font-size: 20px;
  }
`;
export const ContentSelected = styled.div`
  max-width: 320px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 35px;
`;

export const Back = styled.button`
  display: flex;
  gap: 7px;
  align-items: center;
  background: none;
  border: none;
  align-self: flex-start;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }
  span {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }
`;

export const ContentOptions = styled.div`
  max-width: 320px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 25px;
`;

export const CardOption = styled.div`
  width: 100%;
  border-radius: 15px;
  background: #fff;
  height: fit-content;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }

  h2 {
    font-size: 16px;
    color: #282828;
    font-weight: 700;
  }

  img {
    height: 65px;
  }
`;
