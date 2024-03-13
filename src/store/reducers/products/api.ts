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
