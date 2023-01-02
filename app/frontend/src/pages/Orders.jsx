import React from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import ReceiptsTable from '../components/ReceiptsTable';
import Title from '../components/Title';

const Orders = () => {
  return (
    <main>
      <Aside />
      <section>
        <Header />
        <Title />
        <ReceiptsTable />
      </section>
    </main>
  );
};

export default Orders;
