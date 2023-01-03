import React, { useContext } from 'react';
import myContext from '../context/myContext';
import style from '../css/receiptsTable.module.scss';
import formatDate from '../helpers/formatDate';
import formatValue from '../helpers/formatValue';

const ReceiptsTable = () => {
  const { orders, listOfStatus } = useContext(myContext);

  return (
    <table className={style.table}>
      <thead className={style.table__head}>
        <tr className={style.table__head_row}>
          <th>Nota Fiscal</th>
          <th>Sacado</th>
          <th>Cedente</th>
          <th>Emissão</th>
          <th>Valor</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className={style.table__body}>
        {orders.map((order) => (
          <tr key={order.id} className={style.table__body_row}>
            <td>{order.orderNumber}</td>
            <td>{order.buyer.name}</td>
            <td>{order.provider.name}</td>
            <td>{formatDate(order.emissionDate)}</td>
            <td className={style.accent}>{formatValue(+order.value)}</td>
            <td className={style.accent}>
              {listOfStatus[+order.orderStatusBuyer]}
            </td>
            <td>
              <button type="button" className={style.table__body_btn}>
                Dados do cedente
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReceiptsTable;
