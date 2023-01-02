import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getOrders from '../helpers/getOrders';
import listOfStatus from '../helpers/listOfStatus';
import myContext from './myContext';

function MyProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    const allOrders = await getOrders();
    setOrders(allOrders);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const store = { orders, listOfStatus };
  return <myContext.Provider value={store}>{children}</myContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
