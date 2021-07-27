import styled from "styled-components";
import { getColor } from "../../constants";

export const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Message = styled.span`
  font-size: 20px;
  color: ${({ color }) => getColor(color)};
`;
