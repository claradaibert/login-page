import React, { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

// Service import
import { api } from "../../services/api";

//Component import
import { Button } from "../../components/Button";
import PageContainer from "../../components/PageContainer";
import { Input } from "../../components/Input";

// Inner component import
import { PageInputs } from "./PageInputs";

// Style import
import * as Style from "./styles";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loginErrorCounter, setLoginErrorCounter] = useState<number>(0);

  const handleClick = async () => {
    try {
      const schema = yup.object().shape({
        email: yup
          .string()
          .strict()
          .typeError("O e-mail deve ser composto por caracteres alfanuméricos")
          .email("O e-mail inserido é inválido")
          .required("Por favor informe seu e-mail"),
        password: yup
          .string()
          .strict()
          .required("Por favor informe a sua senha"),
      });

      const data = { email, password };

      await schema.validate(data, { abortEarly: false }).catch((err) => {
        err.inner.forEach((error: any) => {
          toast.error(error.message);
        });
        throw err;
      });

      const response = await api.post("/login", data);
    } catch (err: any) {
      setLoginErrorCounter((prev) => prev + 1);
    }
  };

  return (
    <PageContainer>
      <p className="pageTitle">Fazer login</p>
      <PageInputs 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <Button text={"LOGIN"} handleClick={handleClick} />
      <div className="separatorContainer">
        <div className="separatorLine"/>
        <div className="separatorText">ou</div>
        <div className="separatorLine"/>
      </div>
      <button className="redirectionLink" onClick={() => navigate("/signUp")}>
        {" "}
        Não tem cadastro? Clique aqui
      </button>
    </PageContainer>
  );
};

export { Login };
