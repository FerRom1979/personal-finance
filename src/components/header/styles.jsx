import styled from "styled-components";
import { mediaQueries } from "../../types/types-screen";

const { tablet } = mediaQueries;

export const Content = styled.div`
  max-width: min-content;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  background-color: #2962ff;

  ${tablet} {
  }
`;

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Logo = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  color: white;
`;
export const Image = styled.img`
  width: 50px;
`;
