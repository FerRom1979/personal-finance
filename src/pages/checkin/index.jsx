import React from "react";
import Login from "../../components/Login";
import Register from "../../components/register";

import { WrapperLogin, WrapperRegister, Wrapper, Content, Button } from "./styles";

const CheckIn = () => {
  const [login, setLogin] = React.useState(false);
  console.log(login);
  return (
    <Content>
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
        <WrapperRegister style={{ transform: login ? "translate(-50%)" : "translate(100%)" }}>
          <Register />
        </WrapperRegister>
      </Wrapper>
    </Content>
  );
};

export default CheckIn;
