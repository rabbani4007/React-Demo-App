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
      </div>
    </div>
  );
};

export default Example;
