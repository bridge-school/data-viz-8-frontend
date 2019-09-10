import React from "react";
import classnames from 'classnames';
import { Link } from "react-router-dom";

import styles from '../Styles/basicList.module.scss'

function BasicLinkList({ data, title }) {
  return (
    <div className={styles.list}>
      <h2>{title}</h2>
      <ul>
        {data.map(({ name, disabled, route }, index) => {
          return (
            <Link to={route} key={index }>
              <li className={styles.listItem}>
                {
                  disabled ? (
                    <button className={classnames(styles.link, styles.disabledLink)} disabled
                    >{name}</button>
                  )
                    : <button className={styles.link}>{name}</button>
                }
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default BasicLinkList;
