import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import styles from '../Styles/header.module.scss'
import { ReactComponent as Logo } from '../Assets/bridge-logo.svg'

const Header = ({backRoute}) => {
  const { t } = useTranslation()
  
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
          <p className={styles.headerText}>{t('cohort_application_data')}</p>
        </div>
      </div>
    </header>
  )
}

export default Header;
