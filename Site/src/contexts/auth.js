import React, { createContext, useState, useContext } from "react";
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState ("");
  const [senha, setSenha] = useState ("");

  return (
    <AuthContext.Provider value={{user, setUser, email, setEmail, senha, setSenha }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  const { user, setUser, email, setEmail, senha, setSenha } = context;
  return { user, setUser, email, setEmail, senha, setSenha  };
}