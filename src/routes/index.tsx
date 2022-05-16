import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Login";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
