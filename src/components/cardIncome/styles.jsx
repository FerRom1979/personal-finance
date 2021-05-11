import styled from "styled-components";

export const Content = styled.div`
  width: 90%;
  margin: auto;
  border: 1px solid #2962ff;
  border-radius: 20px;
  padding: 10px;
`;
export const WrapperItems = styled.ul`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const WrapperDate = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  margin-top: 20px;
`;
export const ButtonDiscountDay = styled.button`
  position: absolute;
  cursor: pointer;
  left: 25px;
  border: none;
`;
export const ButtonAddDay = styled.button`
  position: absolute;
  cursor: pointer;
  right: 25px;
  border: none;
`;
export const Item = styled.span`
  cursor: pointer;
  :hover {
    border-bottom: 3px solid #2962ff;
  }
`;
export const MessageDefault = styled.h5`
  padding: 10px;
`;
export const WrapperMessage = styled.div`
  border: 1px solid gray;
  width: 120px;
  height: 120px;
  border-radius: 200%;
  text-align: center;
  margin: auto;
`;
export const WrapperAddButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
