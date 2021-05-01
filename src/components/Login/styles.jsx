import styled from "styled-components";

export const Content = styled.div``;
export const FormWrapper = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;
export const InputWrapper = styled.input`
  max-width: 300px;
  margin-bottom: 20px;
  border: none;
  padding: 10px;
  font-size: 18px;
  background: transparent;
  background-color: transparent;
  border-bottom: 1px solid black;
  :hover {
    border-bottom: 3px solid black;
  }
`;
export const Button = styled.button`
  border-radius: 50px;
  padding: 8px 22px;
  min-width: 210px;
  background-color: #2962ff;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    background-color: #184ee4;
  }
`;
export const MessageError = styled.span`
  color: red;
  font-size: 16px;
  font-weight: 300;
`;
