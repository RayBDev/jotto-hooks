import React from "react";

import "./App.css";
import hookActions from "./actions/hookActions";
import reducer from "./reducers/hookReducers";
import Input from "./components/Input";
import languageContext from "./contexts/languageContext";
import LanguagePicker from "./components/LanguagePicker";
import successContext from "./contexts/successContext";
import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
    language: "en"
  });

  const setSecretWord = secretWord =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  const setLanguage = language => {
    dispatch({ type: "setLanguage", payload: language });
  };

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <successContext.SuccessProvider>
          <Congrats />
          <Input secretWord={state.secretWord} />
        </successContext.SuccessProvider>
        {/*<GuessedWords/>*/}
      </languageContext.Provider>
    </div>
  );
}

export default App;
