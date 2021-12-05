import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Repositories from "./Pages/Repositories";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}
