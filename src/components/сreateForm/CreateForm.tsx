import { useForm, type SubmitHandler, type FieldValues } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAppDispatch from '../../hooks/useAppDispatch';
import { addProduct } from '../../store/reducers/products/slice';

const CreateForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const newProduct = {
        description: data.description,
        packageType: data.packageType,
        isArchived: data.isArchived,
        packsNumber: parseInt(data.packsNumber as string, 10)
      };
      await dispatch(addProduct(newProduct));
      reset();
      navigate('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Ошибка при создании продукта:', error);
    }
  };

  return (
    <div className="componentCreateForm">
      <h1>Создание типа продукции</h1>
      <form className="inputForm" onSubmit={handleSubmit(onSubmit)}>
        <nav className="inputFormFields">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Кол-во пачек <b>*</b>
          </span>
          <input className="input" type="number" required {...register('packsNumber')} />
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Тип упаковки <b>*</b>
          </span>
          <select className="select" defaultValue="" required {...register('packageType')}>
            <option value="" disabled>
              Выберите тип упаковки
            </option>
            <option value="компрессия">компрессия</option>
            <option value="некомпрессия">некомпрессия</option>
          </select>
          <span>Архивировано</span>
          <input type="checkbox" {...register('isArchived')} />
          <span style={{ marginTop: '5px' }}>Описание</span>
          <textarea className="textarea" {...register('description')} />
        </nav>
        <div className="panelButton">
          <Link to="/">
            <button className="button blackButton" type="button">
              Отмена
            </button>
          </Link>
          <button className="button yellowButton" type="submit">
            Создать
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
