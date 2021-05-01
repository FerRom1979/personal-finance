import React from "react";
import img from "../../images/mobile-finance-two.png";
import imgOne from "../../images/mobile-finance.png";
import appStore from "../../images/appStoreB.png";
import googlePlay from "../../images/googlePlayA.png";

import {
  faUniversity,
  faCreditCard,
  faChartLine,
  faBell,
  faBullseye,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

import {
  Content,
  Title,
  Description,
  ImgWrapper,
  WrapperCard,
  ImgStore,
  WrapperImgStore,
} from "./styles";
import Card from "../card";

const Welcome = () => {
  return (
    <Content>
      <div>
        <Title>Take control of your finances</Title>
        <Description>
          Taking care of your money can be easy.
          <br /> With Personal Finance, organize and plan your financial life in one place.
        </Description>
        <WrapperImgStore>
          <ImgStore src={appStore} alt="cel" />
          <ImgStore src={googlePlay} alt="cel" />
        </WrapperImgStore>
        <ImgWrapper src={img} alt="wrapper-img" />
      </div>
      <div>
        <Title>A starting point for you to control your money</Title>
        <Description>
          Personal Finance allows you to have personal and family financial control in a complete,
          efficient and easy way
        </Description>
      </div>

      <WrapperCard>
        <Card
          icon={faUniversity}
          title={"connect your accounts"}
          description={"With Personal Finance you know where your money is"}
        />
        <Card
          icon={faCreditCard}
          title={"Manage your cards"}
          description={"Attach your invoices and do not leave surprise payments"}
        />
      </WrapperCard>
      <WrapperCard>
        <Card
          icon={faChartLine}
          title={"Plan your finances"}
          description={"keep your expenses under control through charts"}
        />
        <Card
          icon={faBell}
          title={"Receive alert messages"}
          description={"We help you understand the right path"}
        />
      </WrapperCard>
      <WrapperCard>
        <Card
          icon={faBullseye}
          title={"Mark your goals"}
          description={"Create goals to raise money and achieve your dreams"}
        />
        <Card
          icon={faFile}
          title={"monthly records"}
          description={"Get a monthly analysis of your financial life"}
        />
      </WrapperCard>

      <ImgWrapper src={imgOne} alt="wrapper-img" />
    </Content>
  );
};

export default Welcome;
