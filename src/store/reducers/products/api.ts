/* eslint-disable no-console */
import { type ProductCreateFormData } from './types';
import { Product } from '../../../types';

export const fetchProductsFromServer = async () => {
  try {
    const response = await fetch('http://localhost:8081/productTypes');
    if (!response.ok) {
      throw new Error('Ошибка получения продукта');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createProductOnServer = async (product: ProductCreateFormData) => {
  try {
    const response = await fetch('http://localhost:8081/productTypes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    if (!response.ok) {
      throw new Error('Ошибка создания продукта');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateProductOnServer = async (product: Product) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, createdAt, ...editProduct } = product;
  try {
    const response = await fetch(`http://localhost:8081/productTypes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editProduct)
    });
    if (!response.ok) {
      throw new Error('Ошибка обновления продукта');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteProductOnServer = async (productId: string) => {
  try {
    const response = await fetch(`http://localhost:8081/productTypes/${productId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Ошибка удаления продукта');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
