import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const products = [
    {
      id: 'KatJDS1',
      packsNumber: 24,
      packageType: 'компрессия',
      isArchived: true,
      description: 'Описание продукции\nВ несколько строк',
      createdAt: '2024-02-01T16:08:24.630Z'
    },
    {
      id: '2Pj88FE',
      packsNumber: 12,
      packageType: 'некомпрессия',
      isArchived: false,
      createdAt: '2024-01-25T16:08:24.630Z'
    },
    {
      id: '3s-oN_s',
      packsNumber: 20,
      packageType: 'компрессия',
      isArchived: false,
      description: 'Описание продукции\nВ несколько строк',
      createdAt: '2024-01-23T16:08:24.630Z'
    }
  ];

  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === id);

  const onSubmit = (data: object) => {
    const updatedProduct = {
      ...product,
      ...data
    };
    console.log(updatedProduct);
    reset();
    navigate('/');
  };

  if (!product) {
    return <h1>Продукт не найден</h1>;
  }

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
