import useLocalStorage from "hooks/useLocalStorage";
import { createContext, ReactNode, SetStateAction, Dispatch } from "react";

interface User {
  name: string;
  id: string;
}

type UserContextType = {
  usersList: User[];
  setUsersList: Dispatch<SetStateAction<User[]>>;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [usersList, setUsersList] = useLocalStorage<User[]>("usersList", []);

  return (
    <UserContext.Provider value={{ usersList, setUsersList }}>
      {children}
    </UserContext.Provider>
  );
}
