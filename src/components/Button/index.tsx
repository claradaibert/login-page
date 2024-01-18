import React from "react";

import * as Style from "./styles";

interface IProps {
  handleClick: () => any;
  text: string;
}

const Button: React.FC<IProps> = ({ handleClick, text }) => {
  return (
    <>
      <Style.ButtonContainer onClick={() => handleClick()}>
        {text}
      </Style.ButtonContainer>
    </>
  );
};

export { Button };
