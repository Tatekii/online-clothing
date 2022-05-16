import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
  SignOutAuth,
} from "@/utils/firebase/firebase";
import { User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
// import { User } from "@/types";

export const AuthContext = createContext<
  | {
      user: User | null;
      login: (user: User) => void;
      logout: () => void;
    }
  | undefined
>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => setUser(user);

  const logout = () => {
    SignOutAuth(); // google auth 登出
  };

  useEffect(() => {
    // 观察google auth 的状态改变自动添加/移除context
    const checkAuthState = onAuthStateChangeListener((user) => {
      if (user) {
        // 判断是否新建新用户
        createUserDocumentFromAuth(user);
      }
      setUser(user);
    });

    return checkAuthState;
  }, []);

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
