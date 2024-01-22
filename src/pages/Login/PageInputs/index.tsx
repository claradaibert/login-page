import React from "react";

// Component import
import { Input } from "../../../components/Input";

interface IProps {
  email?: string;
  setEmail: (value: string) => void;
  password?: string;
  setPassword: (value: string) => void;
}

const PageInputs: React.FC<IProps> = ({
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <div className="infoGroup">
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
    </div>
  );
};

export { PageInputs };
