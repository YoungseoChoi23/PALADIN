import client from "./client";

export const postCart = async itemId => {
  try {
    const response = await client.post(`/api/carts/products/${itemId}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCartList = async () => {
  try {
    const response = await client.get(`/api/carts`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteCart = async cartItemId => {
  try {
    const response = await client.delete(`/api/carts/cart-item/${cartItemId}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
