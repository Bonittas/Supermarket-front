import React, { useState } from 'react';
import Header from '../../components/Header3';
import { categories } from './Category';
import { Link } from 'react-router-dom';

import Search from '../Search';
const Dairy = ({ cartItems, setCartItems }) => {
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log(`Added ${product.name} to cart`);
  };

  const [searchQuery, setSearchQuery] = useState('');

 

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProducts = categories[2].products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Header />
      <div className="fixed top-4 left-48 lg:w-1/3 md:w-1/4 sm:w-1/4 z-20 my-2">
        <Search onSearch={handleSearch} /> 
      </div>
      <div className="bg-green-50 min-h-screen pt-6">
        <div className="flex">
          <div className="w-1/4 bg-green-100 p-4 m-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-4 font-cursive font-bold text-lg hover:bg-green-200 transition-colors"
                >
                  <Link to={`/${category.name}`}>{category.name} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 p-4">
            <h2 className="text-2xl font-bold mb-4">Dairy Products</h2>
            <div className="grid grid-cols-3 gap-4 h-3/4">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mb-2 h-56 rounded-lg"
                  />
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-gray-500">${product.price.toFixed(2)}</p>
                  <button
                    className="bg-green-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-green-600 transition-colors"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dairy;