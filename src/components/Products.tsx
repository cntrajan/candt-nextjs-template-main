"use client"; // This component will use client-side state

import { useEffect } from "react";
import { useProductStore } from "@/store/use-store";
import { sdk } from "@/data/client";

const Products = () => {
  const { products, setProducts, currentPage, setPage } = useProductStore();
  const limit = 10;
  const skip = (currentPage - 1) * limit;

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await sdk.GetProducts();

      setProducts(fetchedProducts.productCollection?.items || []);
    };

    loadProducts();
  }, [currentPage, setProducts, skip]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
            >
              <img
                src={product.imageUrl.url}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg mb-2"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">{product.discription}</p>
            </div>
          ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
