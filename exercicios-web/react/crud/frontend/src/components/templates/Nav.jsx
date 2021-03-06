import "./Nav.css";
import NavItem from './NavItem'
import React from "react";

const nav = (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <NavItem href="/" icon="home" title="Início"/>
      <NavItem href="/users" icon="users" title="Usuários"/>
    </nav>
  </aside>
);

export default nav
