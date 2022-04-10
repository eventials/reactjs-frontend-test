import { useContext } from "react";
import { OwnerContext } from "../contexts/OwnerContext";

export function useOwner() {
  const value = useContext(OwnerContext);

  return value;
}
