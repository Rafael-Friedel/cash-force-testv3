import axios from 'axios';

const getOrders = async () => {
  const url = 'http://localhost:3001/orders';
  const { data } = await axios.get(url);
  return data;
};

export default getOrders;
