import React from "react";
// import logo from "./logo.svg";

function BasicList({ data, title }) {
  return (
    <div className="list">
      <h1>{title}</h1>
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
