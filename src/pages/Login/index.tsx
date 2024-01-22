import React, { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

// Hook import
import { useAuth } from "../../hooks/useAuth";

// Service import
import { api } from "../../services/api";

//Component import
import { Button } from "../../components/Button";
import PageContainer from "../../components/PageContainer";

// Inner component import
import { PageInputs } from "./PageInputs";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loginErrorCounter, setLoginErrorCounter] = useState<number>(0);
  const maxLoginErrors = 5;

  const handleDisabledButton = () => {
    setTimeout(() => {
      console.log("acabou timeout");
      setLoginErrorCounter(maxLoginErrors);
    }, 60000);
  };

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
        // eslint-disable-next-line
        throw "failed validation";
      });

      const response = await api.post("/login", data);

      auth.setUser(response.data.user);
      auth.setToken(response.data.token);

      navigate("/profile");
    } catch (err: any) {
      if (err === "failed validation") return;
      setLoginErrorCounter((prev) => {
        const newValue = prev + 1;
        if (newValue > 5) {
          handleDisabledButton();
        }
        return newValue;
      });
      toast.error(err.response.data.message);
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
      <Button
        text={"LOGIN"}
        handleClick={handleClick}
        disabled={loginErrorCounter > maxLoginErrors}
      />
      <>
        {loginErrorCounter > maxLoginErrors && (
          <p className="errorMessage">
            Devido a muitas tentativas falhadas, o login está temporariamente
            bloqueado
          </p>
        )}
      </>
      <button className="redirectionLink" onClick={() => navigate("/signUp")}>
        {" "}
        Não tem cadastro? Clique aqui
      </button>
    </PageContainer>
  );
};

export { Login };
