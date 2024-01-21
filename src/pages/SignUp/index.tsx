import React, { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";

// Component import
import PageContainer from "../../components/PageContainer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import * as Style from "./styles";

interface IFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleButton = async () => {
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
      throw err;
    });

    toast.success('Cadastro realizado!');
  };

  return (
    <PageContainer>
      <p className="pageTitle"> Faça seu cadastro</p>
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
      <Button text="CADASTRAR" handleClick={() => handleButton()} />
    </PageContainer>
  );
};

export { SignUp };
