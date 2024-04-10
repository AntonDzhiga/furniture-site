import React from 'react';
import s from "../style/catalog.module.css";
import Card from '../components/card';

const Catalog = () => {
  return (
    <div className={s.catalogContainer}>
      <div>
        <h2>Кухні</h2>
        <Card category="kitchen" />
      </div>
      <div>
        <h2>Шафи-купе</h2>
        <Card category="wardrobes" />
      </div>
    </div>
  );
}

export default Catalog;
