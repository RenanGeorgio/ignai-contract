import React from "react";
import { Link } from "react-router-dom";

import {
  BookIcon,
  CalendarIcon,
  ChartBarIcon,
  ComponentsIcon,
  CopIcon,
  FileDollarIcon,
  FileTextIcon,
  HeadPhoneIcon,
  LayoutNavIcon,
  LayoutSideBarIcon,
  MailIcon,
  MessageCircleIcon,
  SettingIcon,
  SmartHomeIcon,
  TextWrapIcon,
  IgnaiLogo
} from "@components/icons/Icons";
import SidebarBadge from "@components/badge/SidebarBadge";

import "@styles/sidebar.css";

interface SidebarProps {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

const CustomSideBar: React.FC<SidebarProps> = ({ expanded, setExpanded }) => {
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? "expanded" : ""}`}>
      <div className="container-logo" onClick={toggleSidebar}>
        <IgnaiLogo />
      </div>
      <div className="section1">
        <p className={expanded ? "show-text" : "hide-text"}>Dados</p>
        <Link className="link" to="/">
          <div className="menu-item">
            <ChartBarIcon />
            <span className={expanded ? "show-text" : "hide-text"}>
              Estatísticas
            </span>
          </div>
        </Link>
      </div>
      <div className="section1">
        <div className="sectionContainer">
          <p className={expanded ? "show-text" : "hide-text"}>
            Funil de Vendas
          </p>
          <Link className="link" to="/automação">
            <div className="menu-item">
              <TextWrapIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Automação</p>
              </span>
            </div>
          </Link>

          <Link className="link" to="/jurimetria">
            <div className="menu-item">
              <SmartHomeIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Jurimetria</p>
              </span>
            </div>
          </Link>

          <Link className="link" to="/versões">
            <div className="menu-item">
              <CopIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Versões</p>
              </span>
            </div>
          </Link>

          <Link className="link" to="/">
            <div className="menu-item">
              <LayoutNavIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">ChatBot</p>
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="section1">
        <div className="sectionContainer">
          <p className={expanded ? "show-text" : "hide-text"}>Ajuda</p>
          <Link className="link" to="/configuracoes">
            <div className="menu-item">
              <SettingIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Configurações</p>
              </span>
            </div>
          </Link>

          <Link className="link" to="/">
            <div className="menu-item">
              <FileTextIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Documentação</p>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomSideBar;