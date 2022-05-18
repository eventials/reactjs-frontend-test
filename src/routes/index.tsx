import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import Home from "pages/Home";
import ProtectedRoute from "./ProtectRoute";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
