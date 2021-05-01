import styled from "styled-components";

export const Content = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 40px;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: transform 0.55s;
`;
export const WrapperLogin = styled.div`
  flex-direction: row;
  transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
  direction: ltr;
  display: flex;
  will-change: transform;
  transform: translate(0%);
`;
export const WrapperRegister = styled.div`
  flex-direction: row;
  transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
  direction: ltr;
  display: flex;
  will-change: transform;
  transform: translate(0%);
`;
export const Button = styled.button`
  border: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  padding: 0 20px;
  min-width: 90px;
`;
