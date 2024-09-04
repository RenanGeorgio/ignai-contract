import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@providers";
import Home from "@pages/home";
import { CustomSideBar } from "@components/sidebar";

import "@styles/app.css";
import AutomaoDeEMail from "@pages/AutomaoDeEMail";
import Jurimetria from "@pages/Jurimetria";
import Versions from "@pages/Versions";
import Agendamento from "@pages/Agendamento";
import Buscador from "@pages/Buscador";
import Final from "@pages/Final";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app-container">
      <CustomSideBar expanded={expanded} setExpanded={setExpanded} />
      <Routes>
        <Route path="/" element={<Home expanded={expanded} />} />
        <Route path="/automação" element={<AutomaoDeEMail expanded={expanded} />} />
        <Route path="/jurimetria" element={<Jurimetria expanded={expanded} />} />
        <Route path="/versões" element={<Versions expanded={expanded} />} />
        <Route path="/agendamento" element={<Agendamento expanded={expanded} />} />
        <Route path="/buscador" element={<Buscador expanded={expanded} />} />
        <Route path="/final" element={<Final expanded={expanded} />} />
      </Routes>
    </div>
  );
}


export default App;