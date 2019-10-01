import React from "react";
import PropTypes from "prop-types";

import languageContext from '../contexts/languageContext'
import stringsModule from '../helpers/strings'

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component
 */
const Congrats = props => {
  const language = React.useContext(languageContext);
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          {stringsModule.getStringByLanguage(language, 'congrats')}
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

export default Congrats;

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};
