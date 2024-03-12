import React from 'react';
import { Link } from 'react-router-dom';

const MainPageHeader = () => {
  return (
    <header className="pageHeader">
      <h1>Список выпускаемой продукции</h1>
      <Link to="/create">
        <button className="button yellowButton" type="button">
          Создать тип продукции
        </button>
      </Link>
    </header>
  );
};

export default MainPageHeader;
