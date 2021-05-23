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
  font-weight: bold;
  color: "#000";
  background: transparent;
  background-color: transparent;
  border-bottom: 1px solid black;
  :hover {
    border-bottom: 3px solid black;
  }
`;
export const SpanCheck = styled.span`
  display: inline-block;
  max-width: 300px;
  border: none;
  color: ${(props) => (props.color ? props.color : "gray")};
  font-weight: 0;
  padding: 10px;
  font-size: 18px;
  background: transparent;
  background-color: transparent;
`;
export const WrapperCheck = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  :hover {
    border-bottom: 3px solid black;
  }
`;
export const MessageError = styled.span`
  color: red;
  font-size: 16px;
  font-weight: 300;
`;