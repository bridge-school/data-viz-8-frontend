import React from "react";
import classnames from 'classnames';

import styles from '../Styles/basicButton.module.scss'

function BasicButton({text, active}) {
    return(
        <button className={
            active ? (classnames(styles.button, styles.active)) : (styles.button)
        }>
            {text}
        </button>
    )
}

export default BasicButton;