import React, { useContext } from 'react';
import myContext from '../context/myContext';
import formatDate from '../helpers/formatDate';
import formatValue from '../helpers/formatValue';

const ReceiptsTable = () => {
  const { orders, listOfStatus } = useContext(myContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Nota Fiscal</th>
          <th>Sacado</th>
          <th>Cedente</th>
          <th>Emissão</th>
          <th>Valor</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.CNPJ.cnpj}</td>
            <td>{order.buyer.name}</td>
            <td>{order.provider.name}</td>
            <td>{formatDate(order.emissionDate)}</td>
            <td>{formatValue(+order.value)}</td>
            <td>{listOfStatus[+order.orderStatusBuyer]}</td>
            <button type="button">Dados do cedente</button>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReceiptsTable;
