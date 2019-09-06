import React from "react";

import styles from '../Styles/sidebar.module.scss'

function Sidebar(props) {
    return(
        <>
            <section className={styles.sidebar}>
                {props.children}
            </section>

        </>
    )
}

export default Sidebar;