import styled from "styled-components";

import { mediaQueries } from "../../types/types-screen";

const { tablet } = mediaQueries;

export const Content = styled.div`
  text-align: center;
`;
export const Title = styled.h3`
  padding: 0 20px;
  font-size: 40px;
  font-weight: 300;
`;
export const Description = styled.p`
  font-weight: 200;
  padding: 0 20px;
`;
export const ImgWrapper = styled.img`
  width: 100%;
`;
export const WrapperCard = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const ImgStore = styled.img`
  width: 180px;
  height: 54px;
  border-radius: 5px;
  margin: 5px;
`;
export const WrapperImgStore = styled.div`
  display: none;
  ${tablet} {
    display: block;
  }
`;
