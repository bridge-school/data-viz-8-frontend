import React from "react";
import classnames from 'classnames';
import styles from '../Styles/basicList.module.scss'

function BasicLinkList({ data, title }) {
  return (
    <div className={styles.list}>
      <h2>{title}</h2>
      <ul>
        {data.map(({ name, disabled }) => {
          return <li className={styles.listItem} key={name}>
            {
              disabled ? (
                <button 
                  href="fake-link-here" 
                  className={classnames(styles.link, styles.disabledLink)}
                  disabled
                >
                  {name}
                </button>
              )
              : (
                <a 
                  href="fake-link-here" 
                  className={styles.link}
                >
                  {name}
                </a>
              )
            }
          </li>
        })}
      </ul>
    </div>
  )
}

export default BasicLinkList;
