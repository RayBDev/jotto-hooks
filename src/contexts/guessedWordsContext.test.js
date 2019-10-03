import React from "react";
import { shallow, mount } from "enzyme";

import { GuessedWordsProvider, useGuessedWords } from "./guessedWordsContext";

// a functional component that calls useSuccess for our tests
const FunctionalComponent = () => {
  useGuessedWords();
  return <div />;
};

test("useGuessedWords throws error when not wrapped in SuccessProvider", () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow("useGuessedWords must be used within a GuessedWordsProvider");
});

test("useGuessedWords does not throw error when wrapped in GuessedWordsProvider", () => {
  expect(() => {
    mount(
      <GuessedWordsProvider>
        <FunctionalComponent />
      </GuessedWordsProvider>
    );
  }).not.toThrow();
});
