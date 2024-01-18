import React from "react";

//Component import
import { Button } from "../../components/Button";

// Style import
import * as Style from "./styles";

const Login: React.FC = () => {
  return (
    <Style.PageWrap>
      <Style.Container>
        <Style.PageTitle>Fazer login</Style.PageTitle>
        <Button/>
      </Style.Container>
    </Style.PageWrap>
  );
};

export { Login };
