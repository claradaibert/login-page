import React from "react";

import * as Style from "./styles";

interface IProps {
  handleClick: () => any;
  text: string;
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({ handleClick, text, disabled }) => {
  return (
    <>
      <Style.ButtonContainer onClick={() => handleClick()} aria-label="Botão de login" disabled={disabled}>
        {text}
      </Style.ButtonContainer>
    </>
  );
};

export { Button };
