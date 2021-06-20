import styled from "styled-components";

export const WrapperTablet = styled.div`
  width: 378px;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  text-align: center;
  height: 50px;
  margin: 15px 0;
  font-family: Work Sans;
  font-style: normal;
  font-size: 40px;
  line-height: 47px;
  font-weight: normal;
  color: #000000;
`;

export const WrapperData = styled.div`
  width: 240px;
  height: 50px;
  margin: 10px 0;
  background-color: ${({ bg }) => bg || ""};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextData = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
`;
