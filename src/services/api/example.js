import client from "./client";

//post 요청 예시
export const postExample = async (title, content) => {
  try {
    const response = await client.post(`/요청 주소`, {
      title: title,
      content: content,
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(error);
  }
};

//get 요청 예시
export const getExample = async () => {
  try {
    const response = await client.get(`/요청 주소`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(error);
  }
};

export const getProduct = async () => {
  try {
    const response = await client.get(`/api/items?store=신촌점`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(error);
  }
};

export const ProductDetail = async ({ productId }) => {
  try {
    const response = await client.get(`/api/products/${productId}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(error);
  }
};

export const Productlist = async ({ productId }) => {
  try {
    const response = await client.get(`/api/products/${productId}/items`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(error);
  }
};

export const CreateReview = async ({ productId, reviewData, accessToken }) => {
  try {
    const response = await client.post(
      `/api/products/${productId}/reviews`,
      reviewData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${accessToken}`,
        },
      },
    );
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GetReview = async ({ productId }) => {
  try {
    const response = await client.get(`/api/products/${productId}/reviews`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(error);
  }
};
