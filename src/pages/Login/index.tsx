import React, { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";

//Component import
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

// Style import
import * as Style from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleClick = async() => {
    try{
      const schema = yup.object().shape({
        email: yup
          .string()
          .strict()
          .typeError("O e-mail deve ser composto por caracteres alfanuméricos")
          .email("O e-mail inserido é inválido")
          .required("Por favor informe seu e-mail"),
        password: yup.string().strict().required("Por favor informe a sua senha"),
      });
  
      const data = { email, password };

      await schema.validate(data, {abortEarly: false}).catch((err) => {
        err.inner.forEach((error: any) => {
          toast.error(error.message);
        });
        throw err;
      })

    }catch(err){
    }
  };

  return (
    <Style.PageWrap>
      <Style.Container>
        <Style.PageTitle>Fazer login</Style.PageTitle>
        <Input
          name="email"
          value={email}
          label="E-mail"
          handleChange={(value: string) => setEmail(value)}
        />
        <Input
          name="password"
          value={password}
          label="Senha"
          type="password"
          handleChange={(value: string) => setPassword(value)}
        />
        <Button text={"LOGIN"} handleClick={handleClick} />
      </Style.Container>
    </Style.PageWrap>
  );
};

export { Login };
