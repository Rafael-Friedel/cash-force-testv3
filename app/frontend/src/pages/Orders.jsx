import React from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import ReceiptsTable from '../components/ReceiptsTable';
import Title from '../components/Title';
import style from '../css/index.module.scss';

const Orders = () => {
  return (
    <main className={style.main}>
      <Aside />
      <section className={style.content}>
        <Header />
        <Title />
        <ReceiptsTable />
      </section>
    </main>
  );
};

export default Orders;
