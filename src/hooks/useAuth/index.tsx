import React, { useContext, useState } from "react";

interface IUser {
  name?: string;
  email?: string;
}

interface IAuthContext {
  user?: IUser;
  setUser: (user: IUser) => void;
  token?: string;
  setToken: (token: string) => void;
}

interface IProviderProps {
  children: JSX.Element;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext
);

export const AuthContextProvider: React.FC<IProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [token, setToken] = useState<string | undefined>();

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
}
