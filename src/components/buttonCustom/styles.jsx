import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  padding: 8px 22px;
  min-width: 210px;
  background-color: #2962ff;
  font-size: 18px;
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  cursor: pointer;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    background-color: #184ee4;
  }
`;
