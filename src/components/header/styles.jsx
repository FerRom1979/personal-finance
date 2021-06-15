import styled from "styled-components";
import { mediaQueries } from "../../types/types-screen";

const { tablet } = mediaQueries;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 35px;
  padding-bottom: 20px;
  background-color: #f6f8fb;
  ${tablet} {
  }
`;
export const Title = styled.h3`
  display: none;
`;
export const Logo = styled.span`
  margin-left: 80px;
`;
export const WrapperRegister = styled.div`
  margin-right: 20px;
  background-color: #2962ff;
  padding: 10px;
  border-radius: 50px;
  text-decoration: none;
`;
export const StarApp = styled.span`
  color: #ffffff;
  text-decoration: none;
`;
export const WrapperMenuResponsive = styled.div`
  height: 600px;
  position: absolute;
`;
