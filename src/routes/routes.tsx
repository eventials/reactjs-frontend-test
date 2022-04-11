import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useWebinar from "../hooks/useWebinarStore";
import Login from "../pages/Login/Login";
import Webinar from "../pages/Webinar/Webinar";
import ProtectedRoute, { ProtectedRouteProps } from "./ProtectedRoute";


const AppRoutes = () => {
  const { currentUser } = useWebinar();
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'protectedComponent'> = useMemo(() =>
  ({
    isAuthenticated: !!currentUser?.key,
    authenticationPath: '/login',
  }), [currentUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<ProtectedRoute {...defaultProtectedRouteProps} protectedComponent={<Webinar />} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
