import React from "react";
import { ReactComponent as Logo } from '../Assets/bridge-logo.svg'

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="contentHolder">
          <Logo className="bridgeLogo" />
          <p>Cohort Application Data</p>
        </div>
      </div>
    </header>
  )
}

export default Header;
