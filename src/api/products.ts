const PRODUCTS_PATH = `${process.env.REACT_APP_API_PATH}/products`;

export const getProductsByQuery = async (query: string) => {
  const response = await fetch(`${PRODUCTS_PATH}${query}`);
  const products = await response.json();

  return products;
};
