import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { type Product } from '../../types';

const EditForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

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

  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === id);

  const onSubmit = (data: object) => {
    const createdAt = new Date().toISOString();
    const newData = { ...data, createdAt };
    console.log(newData);
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
          <select className="select" defaultValue="" required {...register('packageType')}>
            <option value={product.packageType} disabled>
              {product.packageType}
            </option>
            <option value="Компрессия">Компрессия</option>
            <option value="Некомпрессия">Некомпрессия</option>
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
