import React from 'react';
import { Link } from 'react-router-dom';
import HandIcon from '../assets/images/HandIcon';
import logo from '../assets/images/logo-cashforce.svg';

const Aside = () => {
  return (
    <aside>
      <img src={logo} alt="Logo da CashForce" />
      <nav>
        <HandIcon fill="#00AD8C" />
        <Link to="/orders">Notas Fiscais</Link>
      </nav>
    </aside>
  );
};

export default Aside;
