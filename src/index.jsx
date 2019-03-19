import React from 'react';
import PropTypes from 'prop-types';

export const StringSwapper = (props) => {
  const propTypes = {
    incoming: PropTypes.string, // a simple incoming string you wish to run pattern matching and replace on.
    componentFunction: PropTypes.func, // function takes a string and returns a ReactChild.
    searchTuple: Proptypes.array // This needs to have 2 values in it. Any more than 2 and they will be ignored.
    // TODO handle case where only a single value is passed to the array. (must have 2, throw error)
  };

  const { incoming, componentFunction,  matchingTuple } = props;
  // This is a recursive function which moves through the incoming message string and
  // pattern matches for specific strings. If found, the matched string is then removed, sent off to a
  // component creation method which returns a new react component, and finally concatenates the whole thing
  // back together into a happy little string.
  const wrapStringFragmentInComponent = (incomingMessage) => {
    if (!incomingMessage)
      return <span>{incomingMessage}</span>;

    const startIndex = incomingMessage.search(matchingTuple[0]);
    // handle case where the startIndex doesn't find anything in incomingMessage
    if (startIndex < 0)
      return <span>{incomingMessage}</span>;

    const endIndex = incomingMessage.slice(startIndex).search(matchingTuple[1]);

    return (
      <span>
        <span>{incomingMessage.slice(0, startIndex)}</span>
        {componentFunction(incomingMessage.slice(startIndex, startIndex + endIndex))}
        {wrapStringFragmentInComponent(incomingMessage.slice(startIndex + endIndex))}
      </span>
    );
  };

  // react component return
  return (wrapStringFragmentInComponent(incoming));
};

export default StringSwapper;
