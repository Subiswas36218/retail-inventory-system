import axios from "axios";

const API = "http://localhost:5078/api/products";

export const getProducts = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const addProduct = async (product: any) => {
  return axios.post(API, product);
};

export const deleteProduct = async (id: number) => {
  return axios.delete(`${API}/${id}`);
};