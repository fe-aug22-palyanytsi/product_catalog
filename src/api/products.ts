const PRODUCTS_PATH = `${process.env.REACT_APP_API_PATH}/products`;

export const getProducts = async () => {
  // eslint-disable-next-line no-console
  console.log(PRODUCTS_PATH);

  // eslint-disable-next-line max-len
  const response = await fetch('https://stalwart-dolphin-d2ae39.netlify.app/.netlify/functions/server/products');
  const products = await response.json();

  return products;
};
