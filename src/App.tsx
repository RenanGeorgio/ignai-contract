import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@providers";
import Home from "@pages/home";
import { CustomSideBar } from "@components/sidebar";

import "@styles/app.css";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <SidebarProvider>
      <div className="app-container">
        <CustomSideBar expanded={expanded} setExpanded={setExpanded} />
        <Routes>
          <Route path="/" element={<Home expanded={expanded} />} />
        </Routes>
      </div>
    </SidebarProvider>
  );
}

export default App;