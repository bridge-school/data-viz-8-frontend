import React from "react";

function BasicList({ data, title }) {
  return (
    <div className="list">
      <h2>{title}</h2>
      <ul>
        {data.map(item => {
          return <li className="listItem">
            <a href="#">
              {item.name}
            </a>
          </li>
        })}
      </ul>
    </div>
  )
}

export default BasicList;
