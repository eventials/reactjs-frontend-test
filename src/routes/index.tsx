import { useCookies } from "react-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Webinar } from "../pages/Webinar";
import { ProtectedRoute } from "./protected.route";

export function AppRoutes() {
  const [cookies] = useCookies();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute cookie={cookies["auth_token"]} />}>
          <Route path="/webinar-room" element={<Webinar />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
