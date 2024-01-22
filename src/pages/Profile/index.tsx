import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Hook import
import { useAuth } from "../../hooks/useAuth";

// Component import
import PageContainer from "../../components/PageContainer";
import { Button } from "../../components/Button";

const Profile: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const logOut = () => {
    auth.setUser({});
    auth.setToken("");
    navigate("/");
  };

  useEffect(() => {
    if (!auth.token) {
      navigate("/");
    }
  }, [auth.token, navigate]);

  return (
    <PageContainer>
      <p className="pageTitle"> Olá, {auth?.user?.name}</p>
      <Button text={"SAIR"} handleClick={() => logOut()} />
    </PageContainer>
  );
};

export { Profile };
