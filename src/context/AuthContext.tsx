import { useCookie } from "hooks/useCookie";
import {
  createContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

type AuthContextType = {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: UserContextProviderProps) {
  const [token, setToken] = useCookie({
    key: "auth_token",
    defaultValue: null,
  });

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
