import React from 'react';
import { Link } from 'react-router-dom';
import { type ITableBodyProps } from './types';
import Tooltip from '../tooltip/Tooltip';

const TableBody: React.FC<ITableBodyProps> = ({ products }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  const sortedProducts = products.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });

  return (
    <tbody>
      {sortedProducts.map((item, index) => (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.packsNumber}</td>
          <td>{item.packageType}</td>
          <td>{formatDate(item.createdAt)}</td>
          <td>{item.isArchived ? 'В архиве' : 'Активно'}</td>
          <td>
            <Tooltip description={item.description ? item.description : 'Описание отсутствует'}>
              <img
                alt="Логотип"
                src="/iconQuestion.png"
                style={{ verticalAlign: 'middle', width: '20px', cursor: 'pointer' }}
              />
            </Tooltip>
          </td>
          <td>
            <Link to={`/edit/${item.id}`}>
              <img
                alt="Логотип"
                src="/iconEdit.png"
                style={{ verticalAlign: 'middle', width: '20px' }}
              />
            </Link>
            <img
              alt="Логотип"
              src="/iconDelete.svg"
              style={{ verticalAlign: 'middle', width: '25px', marginLeft: '20px' }}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
