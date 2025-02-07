import axios from "../axios/axios";

const token = localStorage.getItem("authToken");

interface Product {
  name: string;
  imageURL: string;
  nutriments: string[];
}

const ProductsRepository = {
  getProductsByCategory: async (category: string, page: string): Promise<Product[]> => {
    const response = await axios.get<Product[]>(`/products/${category}/${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  getSavedProducts: async (userId: string): Promise<Product[]> => {
    const response = await axios.get<Product[]>(`/products/saved/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
};

export default ProductsRepository;
