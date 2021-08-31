import styled from "styled-components";
import { mediaQueries } from "../../types/types-screen";

const { tablet } = mediaQueries;

export const Content = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  background-color: #2962ff;

  ${tablet} {
  }
`;

export const WrapperMenu = styled.div`
  display: flex;
`;

export const Title = styled.h3`
  margin: 10px 20px 0 0px;
  color: #ffffff;
  margin-left: 400px;
  font-size: 40px;
`;

export const Logo = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: white;
`;

export const WrapperMenuResponsive = styled.div`
  height: 600px;
  position: absolute;
`;
