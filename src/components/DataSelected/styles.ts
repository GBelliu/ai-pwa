import styled from "styled-components";

export const DataContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
`;
export const GraphicContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 25px 75px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;
export const DataContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 15px;
`;
export const ProgressContent = styled.div`
  span {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
`;
