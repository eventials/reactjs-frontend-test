import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "context/AuthContext";

interface ProtectRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectRouteProps) {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to={"/"} />;
  }

  return children;
}
