import React from 'react';
import TableHeader from '../tableHeader/TableHeader';
import TableBody from '../tableBody/TableBody';
import { type Product } from '../../types';

const MainPageTable = () => {
  const products: Product[] = [
    {
      id: '1',
      packsNumber: 10,
      packageType: 'компрессия',
      createdAt: '2024-03-08T12:00:00Z',
      isArchived: false,
      description: 'Описание товара 1'
    },
    {
      id: '2',
      packsNumber: 20,
      packageType: 'некомпрессия',
      createdAt: '2024-03-07T12:00:00Z',
      isArchived: true,
      description: 'Описание товара 2'
    },
    {
      id: '3',
      packsNumber: 15,
      packageType: 'компрессия',
      createdAt: '2024-03-06T12:00:00Z',
      isArchived: false,
      description: 'Описание товара 3'
    }
  ];

  return (
    <div className="table-container">
      <table className="table">
        <TableHeader />
        <TableBody products={products} />
      </table>
    </div>
  );
};

export default MainPageTable;
