import React, { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

// Hook import
import { useAuth } from "../../hooks/useAuth";

// Component import
import PageContainer from "../../components/PageContainer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

// service import
import { api } from "../../services/api";

import * as Style from "./styles";

interface IFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleButton = async () => {
    try {
      const schema = yup.object().shape({
        name: yup
          .string()
          .strict()
          .required("Por favor informe o seu nome")
          .typeError("O nome deve ser composto de caracteres alfanuméricos"),
        email: yup
          .string()
          .strict()
          .typeError("O e-mail deve ser composto por caracteres alfanuméricos")
          .email("O e-mail inserido é inválido")
          .required("Por favor informe seu e-mail"),
        password: yup.string().strict().required("Por favor informe a sua senha"),
      });
  
      await schema.validate(formData, { abortEarly: false }).catch((err) => {
        err.inner.forEach((error: any) => {
          toast.error(error.message);
        });
        // eslint-disable-next-line
        throw 'failed validation';
      });

      const response = await api.post("signUp", formData)

      auth.setUser(response.data.user);
      auth.setToken(response.data.token);
  
      toast.success("Cadastro realizado!");

      navigate('/profile')
    } catch(err: any) {
      if (err === 'failed validation') return;
      toast.error(err.response.data.message);
    }
  };

  return (
    <PageContainer>
      <Style.BackButtonContainer onClick={() => navigate("/")}>
        <IoChevronBack />
        <p>Voltar</p>
      </Style.BackButtonContainer>
      <p className="pageTitle"> Faça seu cadastro</p>
      <div className="infoGroup">
        <Input
          name="name"
          value={formData.name}
          label="Nome"
          handleChange={(value) => setFormData({ ...formData, name: value })}
        />
        <Input
          name="email"
          value={formData.email}
          label="E-mail"
          handleChange={(value) => setFormData({ ...formData, email: value })}
        />
        <Input
          name="password"
          value={formData.password}
          label="Senha"
          handleChange={(value) => setFormData({ ...formData, password: value })}
        />
      </div>
      <Button text="CADASTRAR" handleClick={() => handleButton()} />
    </PageContainer>
  );
};

export { SignUp };
