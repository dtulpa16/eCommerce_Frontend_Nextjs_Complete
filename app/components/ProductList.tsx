import React from "react";
import { Product } from "../_lib";
import Image from 'next/image'
type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {products.map((el) => (
        <div
          key={el.id}
          className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={el.imageUrl}
            alt={el.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h1 className="text-xl font-semibold mb-2">{el.name}</h1>
            <h3 className="text-lg text-green-600 font-bold mb-4">
              ${el.price.toFixed(2)}
            </h3>
            <p className="text-gray-600">{el.description}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
              View details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
