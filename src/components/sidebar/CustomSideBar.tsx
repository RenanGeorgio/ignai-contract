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
} from "@components/Icons";
import SidebarBadge from "../badge/SidebarBadge";

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
        <Link className="link" to="/estatisticas">
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
          <p className={expanded ? "show-text" : "hide-text"}>Atendimento</p>
          <Link className="link" to="/email">
            <div className="menu-item"> 
              <MailIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Email</p>
              </span>
            </div>
            <div className={expanded ? "show-text" : "hide-text"}>
              <SidebarBadge value={2} />
            </div>
          </Link>
          <Link className="link" to="/chat">
            <div className="menu-item">
              <MessageCircleIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Chat</p>
              </span>
            </div>
          </Link>
          <Link className="link" to="/calendar">
            <div className="menu-item">
              <CalendarIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Calendário</p>
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="section1">
        <div className="sectionContainer">
          <p className={expanded ? "show-text" : "hide-text"}>Vendas</p>
          <Link className="link" to="/leads">
            <div className="menu-item">
              <LayoutSideBarIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen"> Leads</p>
              </span>
            </div>
            <div className={expanded ? "show-text" : "hide-text"}>
              <SidebarBadge value={10} />
            </div>
          </Link>
          <Link className="link" to="/contact">
            <div className="menu-item">
              <BookIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Contatos</p>
              </span>
            </div>
          </Link>
          <Link className="link" to="/negocios">
            <div className="menu-item">
              <ComponentsIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Negócios</p>
              </span>
            </div>
          </Link>
          <Link className="link" to="/">
            <div className="menu-item">
              <FileDollarIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen"> Faturas</p>
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="section1">
        <div className="sectionContainer">
          <p className={expanded ? "show-text" : "hide-text"}>
            Funil de Vendas
          </p>
          <Link className="link" to="/formulario">
            <div className="menu-item">
              <TextWrapIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Formulário</p>
              </span>
            </div>
          </Link>

          <Link className="link" to="/email">
            <div className="menu-item">
              <SmartHomeIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Automação Email</p>
              </span>
            </div>
          </Link>

          <Link className="link" to="/whatsapp">
            <div className="menu-item">
              <CopIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Disparo WhatsApp</p>
              </span>
            </div>
          </Link>

          <Link className="link" to="/chatbot">
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

          <Link className="link" to="/suporte">
            <div className="menu-item">
              <HeadPhoneIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Suporte</p>
              </span>
            </div>
          </Link>

          <Link className="link" to="/">
            <div className="menu-item">
              <FileTextIcon />
              <span className={expanded ? "show-text" : "hide-text"}>
                <p className="textOpen">Documentation</p>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomSideBar;