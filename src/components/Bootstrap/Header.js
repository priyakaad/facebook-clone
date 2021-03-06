import React from "react";
import HeaderUserMeta from "../HeaderUserMeta";

const Header = ({dark, children, className, UserMeta}) => {
    dark = !!dark ? "dark" : "light";
    return (
        <nav className={`navbar navbar-${dark} bg-${dark}` +(className ? " " + className: " ")}>
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src="/logo512.png" alt={children + "logo"} width="30" height="24" className="me-2"/>
      {children}
    </a>
  {UserMeta && <HeaderUserMeta {...UserMeta}/>}
  </div>
</nav>
    );
};

export default Header;
