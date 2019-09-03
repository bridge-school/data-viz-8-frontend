import React from "react";
import { Link } from "react-router-dom";

import styles from '../Styles/header.module.scss'
import { ReactComponent as Logo } from '../Assets/bridge-logo.svg'

function Header({backRoute}) {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.contentHolder}>
          {
            backRoute &&
            <Link to={backRoute} className={styles.backBtn}>
              &lt;
            </Link>
          }
          <Logo className={styles.bridgeLogo} />
          <p className={styles.headerText}>Cohort Application Data</p>
        </div>
      </div>
    </header>
  )
}

export default Header;
