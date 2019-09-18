import React from "react";

import styles from '../Styles/loader.module.scss'
import { ReactComponent as Logo } from '../Assets/bridge-logo.svg'

const Loader = () => {
  return (
    <section className={styles.loader}>
         <Logo className={styles.bridgeLogo} />
    </section>
  )
}

export default Loader;
