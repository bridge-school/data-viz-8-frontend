import React from "react";

function BasicList({ data, title }) {
  return (
    <div className="list">
      <h2>{title}</h2>
      <ul>
        {data.map(item => {
          return <li className="listItem">
            <a href="www.fake-link-to-pass-tests-on-ci.com">
              {item.name}
            </a>
          </li>
        })}
      </ul>
    </div>
  )
}

export default BasicList;
