import styled from "styled-components";

export const WrapperHeader = styled.div`
  width: 100%;
  margin-top: 40px;
`;
export const WrapperMenu = styled.div`
  top: 20px;
`;
export const WrapperTotal = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const WrapperSubTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
`;
export const SubTitle = styled.span`
  display: inline-block;
  color: ${(props) => (props.color ? props.color : "")};
  margin-top: 5px;
  font-size: 20px;
`;
