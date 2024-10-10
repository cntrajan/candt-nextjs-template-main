// src/app/page.tsx
import Products from "@/components/products";

const Home = () => {
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        E-Commerce Store
      </h1>
      <Products />
    </main>
  );
};

export default Home;
