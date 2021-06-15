import styled from "styled-components";

export const Content = styled.div`
  width: 940px;
  height: 660px;
  background-color: #ffffff;
  margin: 30px auto;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const WrapperTitle = styled.div`
  width: 860px;
  height: 50px;
  margin: auto;
  padding: 19px 0px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const Title = styled.span`
  width: 193px;
  height: 47px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
`;

export const FormWrapper = styled.form`
  margin-top: 10px;
  width: 660px auto;
  height: 264px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const TitleInput = styled.h1`
  font-family: Work Sans;
  margin: 0;
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  line-height: 47px;
  color: rgba(0, 0, 0, 0.25);
`;

export const InputWrapper = styled.input`
  width: 660px;
  border: none;
  text-align: center;
  font-size: 30px;
  background: transparent;
  background-color: transparent;
  border-bottom: 3px solid rgba(0, 0, 0, 0.25);
  :hover {
    border-bottom: 3px solid black;
  }
`;

export const MessageError = styled.span`
  color: red;
  font-size: 16px;
  font-weight: 300;
`;
