import React from 'react';
import TableHeader from '../tableHeader/TableHeader';
import TableBody from '../tableBody/TableBody';

const MainPageTable = () => {
  return (
    <table className="table">
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default MainPageTable;
