import React from "react";
import PropTypes from "prop-types";

import languageContext from "../contexts/languageContext";
import stringsModule from "../helpers/strings";
import successContext from "../contexts/successContext";
import { getLetterMatchCount } from "../helpers";
import guessedWordsContext from "../contexts/guessedWordsContext";

const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext);
  const [success, setSuccess] = successContext.useSuccess();
  const [guessedWords, setGuessedWords] = guessedWordsContext.useGuessedWords();
  const [currentGuess, setCurrentGuess] = React.useState("");

  const submitForm = e => {
    e.preventDefault();
    const letterMatchCount = getLetterMatchCount(currentGuess, secretWord);
    const newGuessedWords = [
      ...guessedWords,
      { guessedWord: currentGuess, letterMatchCount }
    ];
    setGuessedWords(newGuessedWords);

    if (currentGuess === secretWord) {
      setSuccess(true);
    }
    setCurrentGuess(currentGuess);
  };

  if (success) {
    return null;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder={stringsModule.getStringByLanguage(
            language,
            "guessInputPlaceholder"
          )}
          value={currentGuess}
          onChange={e => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={e => submitForm(e)}
        >
          {stringsModule.getStringByLanguage(language, "submit")}
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;
