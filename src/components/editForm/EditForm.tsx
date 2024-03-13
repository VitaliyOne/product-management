import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAppSelector from '../../hooks/useAppSelector';
import { selectSortedProducts } from '../../store/selectors/productsSelectors';

const EditForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const products = useAppSelector(selectSortedProducts);

  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <h1>Продукт не найден</h1>;
  }

  const onSubmit = (data: object) => {
    const updatedProduct = {
      ...product,
      ...data
    };
    console.log(updatedProduct);
    reset();
    navigate('/');
  };

  return (
    <div className="componentCreateForm">
      <h1>Редактирование типа продукции</h1>
      <form className="inputForm" onSubmit={handleSubmit(onSubmit)}>
        <nav className="inputFormFields">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Кол-во пачек <b>*</b>
          </span>
          <input
            className="input"
            type="number"
            required
            {...register('packsNumber')}
            value={product.packsNumber}
          />
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Тип упаковки <b>*</b>
          </span>
          <select
            className="select"
            defaultValue={product.packageType}
            required
            {...register('packageType')}
          >
            <option defaultValue={product.packageType} disabled>
              {product.packageType}
            </option>
            <option value="компрессия">компрессия</option>
            <option value="некомпрессия">некомпрессия</option>
          </select>
          <span>Архивировано</span>
          <input type="checkbox" {...register('isArchived')} defaultChecked={product.isArchived} />
          <span style={{ marginTop: '5px' }}>Описание</span>
          <textarea className="textarea" {...register('description')} value={product.description} />
        </nav>
        <div className="panelButton">
          <button className="button redButton" type="button">
            Удалить
          </button>
          <Link to="/">
            <button className="button blackButton" type="button">
              Отмена
            </button>
          </Link>
          <button className="button yellowButton" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
