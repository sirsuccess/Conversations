import React from "react";

import Logo from "../../common/logo/Logo";
import CompanyName from "../../common/companyName/CompanyName";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="Navbar1">
      <Logo />
      <CompanyName />
    </div>
  );
}

export default NavBar;
