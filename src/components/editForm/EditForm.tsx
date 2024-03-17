import { useForm, type SubmitHandler, type FieldValues } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import { removeProduct, updateProduct } from '../../store/reducers/products/slice';
import { selectSortedProducts } from '../../store/reducers/products/selectors';

const EditForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const products = useAppSelector(selectSortedProducts);
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === id);

  const onDeleteButtonClick = async (id: string) => {
    // eslint-disable-next-line no-alert
    const isDeletionConfirmed = window.confirm('Вы уверены, что хотите удалить продукт?');
    if (isDeletionConfirmed) {
      await dispatch(removeProduct(id));
      navigate('/');
    }
  };

  if (!product) {
    return <h1>Продукт не найден</h1>;
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const editProduct = {
      id: product.id,
      createdAt: product.createdAt,
      description: data.description,
      packageType: data.packageType,
      isArchived: data.isArchived,
      packsNumber: parseInt(data.packsNumber as string, 10)
    };
    await dispatch(updateProduct(editProduct));
    reset();
    navigate('/');
  };

  return (
    <div className="componentCreateForm">
      <h1>Редактирование типа продукции</h1>
      <form className="inputForm" onSubmit={handleSubmit(onSubmit)}>
        <nav className="inputFormFields">
          <span className="inputLabel">
            Кол-во пачек <b>*</b>
          </span>
          <input
            className="input"
            type="number"
            required
            {...register('packsNumber')}
            defaultValue={product.packsNumber}
          />
          <span className="inputLabel">
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
          <textarea
            className="textarea"
            {...register('description')}
            defaultValue={product.description}
          />
        </nav>
        <div className="panelButton">
          <button
            className="button redButton"
            type="button"
            onClick={() => onDeleteButtonClick(product.id)}
          >
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
