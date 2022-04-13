import { createContext, ReactNode, useState } from "react";
import { useCookies } from "react-cookie";
import { v4 as uuid } from "uuid";

export type Owner = {
  id: string;
  name: string;
  video: string;
  token: string;
};

type OwnerContextType = {
  owner: Owner | undefined;
  createWebinar: (ownerName: string) => Promise<void>;
  endWebinar: () => void;
};

type OwnerContextProviderProps = {
  children: ReactNode;
};

export const OwnerContext = createContext({} as OwnerContextType);

export function OwnerContextProvider(props: OwnerContextProviderProps) {
  const [owner, setOwner] = useState<Owner>();
  const [, setCookie, removeCookie] = useCookies(["auth_token"]);

  async function createWebinar(ownerName: string) {
    // Houve a tentativa de utilizar a lib jsonwebtoken para gerar o token, mas exigiria uma configuração
    // adicional do webpack, sendo necessário fazer o eject do create-react-app e configurar manualmente
    // para evitar isso optei por simplificar o funcionamento, mantendo um JWT fixo.
    const ownerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJ2aWRlbyI6IiJ9.GAmXpVnPKqqrE_K2Ln8OgCmS8EBrOg0juPAHEfU_Swk";

    setOwner({ id: uuid(), name: ownerName, video: "", token: ownerToken });

    setCookie("auth_token", ownerToken, { path: "/" });
  }

  async function endWebinar() {
    setOwner(undefined);
    removeCookie("auth_token");
  }

  return (
    <OwnerContext.Provider value={{ owner, createWebinar, endWebinar }}>
      {props.children}
    </OwnerContext.Provider>
  );
}
