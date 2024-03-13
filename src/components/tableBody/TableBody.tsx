import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '../tooltip/Tooltip';
import useAppSelector from '../../hooks/useAppSelector';
import { selectSortedProducts } from '../../store/selectors/productsSelectors';

const TableBody = () => {
  const products = useAppSelector(selectSortedProducts);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <tbody>
      {products.map((item, index) => (
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
