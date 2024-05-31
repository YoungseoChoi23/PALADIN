import client from "./client";

export const postCart = async itemId => {
  try {
    const response = await client.post(`/api/carts/products/${itemId}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
