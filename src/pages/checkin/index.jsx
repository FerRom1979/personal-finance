import React from "react";
import { Login } from "../../components";
import Register from "../../components/register";
import Saving from "../../images/saving-way.jpg";
import { color } from "../../constants";

import {
  WrapperLogin,
  WrapperRegister,
  Wrapper,
  Content,
  Button,
  ImgSaving,
  WrapperSaving,
} from "./styles";

const CheckIn = () => {
  const [login, setLogin] = React.useState(false);
  return (
    <Content>
      <WrapperSaving>
        <ImgSaving src={Saving} alt="save" />
      </WrapperSaving>
      <div>
        <Button
          type="button"
          onClick={() => setLogin(!login)}
          style={{ borderBottom: !login && "3px solid #2962ff" }}
        >
          Login
        </Button>
        <Button
          type="button"
          onClick={() => setLogin(!login)}
          style={{ borderBottom: login && "3px solid #2962ff" }}
        >
          Register
        </Button>
        <Wrapper>
          <WrapperLogin
            style={{
              transform: login ? "translate(-100%)" : "translate(50%)",
            }}
          >
            <Login />
          </WrapperLogin>
          <WrapperRegister style={{ transform: login ? "translate(-50%)" : "translate(150%)" }}>
            <Register />
          </WrapperRegister>
        </Wrapper>
      </div>
    </Content>
  );
};

export default CheckIn;
