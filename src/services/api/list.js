import client from "./client";

export const getList = async category => {
  // /api/products/books
  // /api/products/records
  // /api/products/goods
  try {
    const response = await client.get(`/api/products/${category}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(error);
  }
};
