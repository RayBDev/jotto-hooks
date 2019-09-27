import React from "react";
import "./App.css";
import hookActions from "./actions/hookActions";

import reducer from "./reducers/hookReducers";

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = secretWord =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return <div data-test="component-app"></div>;
}

export default App;
