import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Tooltip from '../tooltip/Tooltip';
import useAppSelector from '../../hooks/useAppSelector';

import useAppDispatch from '../../hooks/useAppDispatch';
import { fetchProducts, removeProduct } from '../../store/reducers/products/slice';
import { selectSortedProducts } from '../../store/reducers/products/selectors';

const MainPageTableBody = () => {
  const products = useAppSelector(selectSortedProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // eslint-disable-next-line no-console
    dispatch(fetchProducts()).catch((error) => console.log(error));
  }, [dispatch]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const onDeleteButtonClick = async (id: string) => {
    // eslint-disable-next-line no-alert
    const isDeletionConfirmed = window.confirm('Вы уверены, что хотите удалить продукт?');
    if (isDeletionConfirmed) {
      await dispatch(removeProduct(id));
    }
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
              <img alt="Описание" className="mainPageTableIcon" src="/iconQuestion.png" />
            </Tooltip>
          </td>
          <td>
            <Link to={`/edit/${item.id}`}>
              <img alt="Редактировать" className="mainPageTableIcon" src="/iconEdit.png" />
            </Link>
            <button
              className="mainPageTableButtonIcon"
              type="button"
              onClick={() => onDeleteButtonClick(item.id)}
            >
              <img alt="Удалить" className="mainPageTableIcon iconDelete" src="/iconDelete.svg" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default MainPageTableBody;
