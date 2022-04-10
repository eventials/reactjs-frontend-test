import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useOwner } from "../hooks/useOwner";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Webinar } from "../pages/Webinar";
import { ProtectedRoute } from "./protected.route";

export function AppRoutes() {
  const { owner } = useOwner();

  console.log(owner);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute owner={owner} />}>
          <Route path="/webinar-room" element={<Webinar />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
