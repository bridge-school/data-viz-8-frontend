import React from "react";
import styles from '../Styles/header.module.scss'
import { ReactComponent as Logo } from '../Assets/bridge-logo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.contentHolder}>
          <Logo className={styles.bridgeLogo} />
          <p className={styles.headerText}>Cohort Application Data</p>
        </div>
      </div>
    </header>
  )
}

export default Header;
