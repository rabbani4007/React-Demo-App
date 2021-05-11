import React, { useState, useEffect, useRef, useContext } from "react";
export const LanguageContext = React.createContext({ lang: "en" });

const Example = () => {
  let [count, setCount] = useState(0);
  const { lang } = useContext(LanguageContext);

  return (
    <div className="row">
      <div className="row-cols-1 ">
        <p>Counter :{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        Your current language : {lang}
        <br />
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Dropdown Example
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a href="#">HTML</a>
            </li>
            <li>
              <a href="#">CSS</a>
            </li>
            <li>
              <a href="#">JavaScript</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example;
