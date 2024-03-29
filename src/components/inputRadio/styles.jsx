import styled from "styled-components";

export const Label = styled.label`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  cursor: pointer;
  input {
    width: 30px;
    height: 18px;
    display: inline-block;
    line-height: 18px;
    background-repeat: no-repeat;
    background-position: 0 0;
    vertical-align: middle;
    cursor: pointer;
  }
`;
