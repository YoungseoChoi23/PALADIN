import client from "./client";

export const getSearchedList = async productName => {
  try {
    const response = await client.get(
      `/api/products/search?productName=${productName}`,
    );
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(error);
  }
};
