import { IProduct } from "@/types/products";
import { ApiService } from "@/utils/apiService";

export const getAllProducts = async (): Promise<IProduct[]> => {
  const { data } = await ApiService().get("/products");
  return data.items;
};
