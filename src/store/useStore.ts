// src/store/useStore.ts
import { create } from "zustand";

interface ProductStore {
  products: any[];
  currentPage: number;
  setProducts: (products?: any[]) => void;
  setPage: (page: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  currentPage: 1,
  setProducts: (products) => set({ products }),
  setPage: (page) => set({ currentPage: page }),
}));
