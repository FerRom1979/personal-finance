import styled from "styled-components";
import { getColor } from "../../constants";

export const Button = styled.button`
  border-radius: 5px;
  min-height: 50px;
  padding: 8px 22px;
  margin: ${(props) => (props.margin ? props.margin : "")};
  border: none;
  width: ${(props) => (props.width ? props.width : "")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "")};
  background-color: ${({ background }) => getColor(background)};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  cursor: pointer;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  :hover {
    background-color: #184ee4;
  }
`;
