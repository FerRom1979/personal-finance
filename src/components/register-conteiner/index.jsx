import React, { useState } from "react";
import Login from "../Login/index";
import Register from "../register";

// styles
import { Content, FormWrapper, Wrapper, WrapperForm } from "./RegisterContainer.Styles";

const RegisterContainer = () => {
  const [transition, setTransition] = useState(false);
  return (
    <Content className={!transition ? "" : "active"}>
      <FormWrapper className={!transition ? "" : "active"}>
        <Wrapper className={!transition ? "" : "active"}>
          <div className="box signin">
            <h2>Already Have an Account ?</h2>
            <button onClick={() => setTransition(!transition)}>Sign in</button>
          </div>
          <div className="box ">
            <h2>Don&apos;t Have an Account ?</h2>
            <button onClick={() => setTransition(!transition)}>Sign up</button>
          </div>
        </Wrapper>
        <WrapperForm className={!transition ? "" : "active"}>
          {!transition ? (
            <Login />
          ) : (
            <Register transition={transition} setTransition={setTransition} />
          )}
        </WrapperForm>
      </FormWrapper>
    </Content>
  );
};

export default RegisterContainer;
