import React from "react";
import { useHistory } from "react-router-dom";

import { Content, Title } from "./styles";

const Welcome = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/checkIn");
  }, 2000);
  return (
    <Content>
      <Title>Welcome a Income Personal</Title>
    </Content>
  );
};

export default Welcome;
