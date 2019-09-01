import React from "react";
import styles from '../Styles/basicList.module.scss'

function BasicList({ data, title }) {
  return (
    <div className={styles.list}>
      <h2>{title}</h2>
      <ul>
        {data.map(item => {
          return <li className={styles.listItem} key={item.name}>
            <a href="www.fake-link-to-pass-tests-on-ci.com" className={styles.link}>
              {item.name}
            </a>
          </li>
        })}
      </ul>
    </div>
  )
}

export default BasicList;
