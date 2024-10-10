// src/store/useStore.ts
import { create } from "zustand";

interface ProductStore {
  products: any[];
  currentPage: number;
  setProducts: (products: any[]) => void;
  setPage: (page: number | ((prev: number) => number)) => void; // Updated type here
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  currentPage: 1,
  setProducts: (products: any[]) => set({ products }),
  setPage: (page: any) =>
    set((state: any) => ({
      currentPage: typeof page === "function" ? page(state.currentPage) : page,
    })),
}));
