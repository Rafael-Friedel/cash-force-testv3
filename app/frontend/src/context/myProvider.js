import PropTypes from 'prop-types';
import React from 'react';
import myContext from './myContext';

function MyProvider({ children }) {
  const store = {};

  return <myContext.Provider value={store}>{children}</myContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
