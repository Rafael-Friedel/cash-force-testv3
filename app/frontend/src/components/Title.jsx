import React from 'react';
import HandIcon from '../assets/images/HandIcon';
import style from '../css/title.module.scss';

const Title = () => {
  return (
    <div className={style.title}>
      <h1 className={style.title__heading}>
        <HandIcon fill="#021B51" />
        Notas Fiscais
      </h1>
      <h4 className={style.title__subtitle}>
        Visualize as notas fiscais que você tem:
      </h4>
    </div>
  );
};

export default Title;
