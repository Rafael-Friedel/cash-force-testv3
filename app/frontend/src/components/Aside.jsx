import React from 'react';
import { Link } from 'react-router-dom';
import HandIcon from '../assets/images/HandIcon';
import logo from '../assets/images/logo-cashforce.svg';
import style from '../css/aside.module.scss';

const Aside = () => {
  return (
    <aside className={style.aside}>
      <img src={logo} alt="Logo da CashForce" className={style.aside__logo} />
      <nav className={style.aside__navbar}>
        <HandIcon fill="#00AD8C" />
        <Link to="/orders" className={style.aside__navbar_link}>
          Notas Fiscais
        </Link>
      </nav>
    </aside>
  );
};

export default Aside;
