import { createContext, ReactNode, useContext, useState } from "react";
import { UserData } from "@/types";

export const AuthContext = createContext<
  | {
      user: UserData | null;
      login: (userData: UserData) => void;
      logout: () => void;
    }
  | undefined
>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  const login = (userData: UserData) => setUser(userData);

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, login, logout }}
      children={children}
    ></AuthContext.Provider>
  );
};

/** auth context 消费Hook */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("use context in your provider!");
  }
  return context;
};
