import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "@components/sidebar";
import { SidebarProvider } from "@contexts/SidebarContext";
import Home from "@pages/home";

import "@styles/app.css";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <SidebarProvider>
      <div className="app-container">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
        <Routes>
          <Route path="/" element={<Home expanded={expanded} />} />
        </Routes>
      </div>
    </SidebarProvider>
  );
}

export default App;
