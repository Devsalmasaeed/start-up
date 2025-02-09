import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
