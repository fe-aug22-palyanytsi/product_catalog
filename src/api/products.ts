const PRODUCTS_PATH = `${process.env.REACT_APP_API_PATH}/products`;

export const getProductById = async (id: string) => {
  const response = await fetch(`${PRODUCTS_PATH}/${id}`);
  const product = await response.json();

  return product;
};

export const getProductsByQuery = async (query: string) => {
  const response = await fetch(`${PRODUCTS_PATH}?${query}`);
  const products = await response.json();

  return products;
};

export const getNewProducts = async () => {
  const response = await fetch(`${PRODUCTS_PATH}/new`);
  const products = await response.json();

  return products;
};

export const getClosestDiscountProducts = async () => {
  const response = await fetch(`${PRODUCTS_PATH}/discount`);
  const products = await response.json();

  return products;
};
