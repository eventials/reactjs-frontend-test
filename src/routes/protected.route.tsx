import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ cookie, redirectPath = "/" }: any) {
  if (!cookie) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
