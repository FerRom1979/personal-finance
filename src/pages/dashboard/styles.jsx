import styled from "styled-components";

export const WrapperSubTitle = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  align-items: space-around;
  justify-content: space-around;
`;

export const Title = styled.h3`
  margin: 0 20px;
  font-size: 40px;
  font-weight: normal;
`;

export const WrapperInputRadio = styled.div`
  width: 400px;
  display: flex;
  justify-content: inherit;
`;

export const Select = styled.div`
  width: 400px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 30px;
  padding-top: 5px;
  text-align: center;
`;

export const WrapperData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const WrapperHeader = styled.div``;
export const WrapperMenu = styled.div`
  top: 20px;
`;
export const WrapperTotal = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const SubTitle = styled.span`
  display: inline-block;
  color: ${(props) => (props.color ? props.color : "")};
  cursor: ${(props) => (props.cursor ? props.cursor : "")};
  font-size: 20px;
`;
export const ButtonAdd = styled.button`
  display: flex;
  flex-direction: row;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 0;
  margin-left: 20px;
  margin-right: 20px;
  :hover {
    opacity: 0.5;
  }
`;
export const ADDSpan = styled.span`
  font-size: 28px;
  color: black;
  font-weight: 600;
`;
