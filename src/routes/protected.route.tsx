import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ owner, redirectPath = "/" }: any) {
  if (!owner) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
