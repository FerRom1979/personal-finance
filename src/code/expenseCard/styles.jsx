import styled from "styled-components";

export const Content = styled.div`
  overflow: hidden;
  width: 940px;
  margin: 60px auto;

  background: #ffffff;
  box-shadow: 0px 5px 20px rgba("94,91,91,0.25");
  border-radius: 10px;
`;

export const WrapperTitle = styled.div`
  width: 860px;
  height: 50px;
  margin-left: 40px;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  width: 294px;
  height: 45px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;

  color: #000000;
`;

export const Date = styled.p`
  width: 340px;
  height: 22px;
  margin-top: 15px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  text-align: end;
  color: #000000;
`;

export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 940px;
  height: 57px;
  margin-top: 30px;

  background: #43a854;
  border-radius: 0px 0px 10px 10px;
`;

export const TextFooter = styled.p`
  padding-left: 40px;
  padding-right: 40px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
`;
