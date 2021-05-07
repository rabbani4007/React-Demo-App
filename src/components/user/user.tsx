import React, { useContext, useReducer, useState } from "react";
import { LanguageContext } from "../learning-page/examples";

interface MyProps {
  firstName: string;
}
type ActionType = {
  type: "reset" | "increment" | "decrement";
};
type StateType = {
  count: number;
};
const initialState = { count: 0 };
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Or with hooks, something like

const User = ({ firstName }: MyProps, { initialCount = 0 }) => {
  const [value, setValue] = useState<string>(firstName);
  const { lang } = useContext(LanguageContext);

  const [state, dispatch] = useReducer(reducer, { count: 10 });

  return (
    <div>
      <h1>Hello {firstName}</h1>
      <p>Current Langugae :{lang}</p>
      Count :{state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default User;
