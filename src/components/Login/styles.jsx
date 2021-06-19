import styled from "styled-components";
import LoginImg from "../../images/login.png";

export const Content = styled.div`
  width: 940px;
  height: 699px;
  margin: 30px auto;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(94, 91, 91, 0.25);
  border-radius: 10px;
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
  width: 124px;
  height: 50px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
  color: #000000;
`;

export const WrapperImg = styled.div`
  margin: auto;
  max-width: 602px;
  max-height: 295px;
`;
export const FormWrapper = styled.form`
  margin-top: 30px;
  width: 860px;
  height: 264px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const ImgLogin = styled.img`
  width: 602px;
  height: 295px;
  margin: auto;
`;
export const TitleInput = styled.h1`
  font-family: Work Sans;
  margin: 0;
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  line-height: 47px;
  color: rgba(0, 0, 0, 0.25);
`;
export const InputWrapper = styled.input`
  width: 860px;
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
  font-size: 20px;
  font-weight: 300;
`;
export const WrapperBottomLogin = styled.div`
  margin-top: 30px;
`;
