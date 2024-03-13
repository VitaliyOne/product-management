import React from 'react';
import TableHeader from '../tableHeader/TableHeader';
import TableBody from '../tableBody/TableBody';

const MainPageTable = () => {
  return (
    <div className="table-container">
      <table className="table">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
};

export default MainPageTable;
