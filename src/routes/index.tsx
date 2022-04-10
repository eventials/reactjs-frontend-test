import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OwnerContextProvider } from "../contexts/OwnerContext";
import { useOwner } from "../hooks/useOwner";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  const { owner } = useOwner();

  return (
    <BrowserRouter>
      <OwnerContextProvider>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          {owner && <Route path="/webinar-room" />}
        </Routes>
      </OwnerContextProvider>
    </BrowserRouter>
  );
}
