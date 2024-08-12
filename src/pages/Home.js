/* ./pages/Home.js */
import React from 'react';
import '../css/styles.css';
import Product from '../component/Product';

function App() {
  return (
    <div className="main-div">
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Sample product data to display in the product list
const products = [
  {
    id: 1,
    name: 'Kids Backpacks',
    description: 'Heritage™ Backpack | Kids - 15L',
    price: 60, // Changed to a number for consistency
    image: '/images/product9.jpeg',
  },
  {
    id: 2,
    name: 'Ivy Green Laptop Bag',
    description: 'Retreat™ Backpack - 23L',
    price: 130,
    image: '/images/product2.jpeg',
  },
  {
    id: 3,
    name: 'Navy Blue Backpack',
    description: 'City Backpack - 16L',
    price: 90,
    image: '/images/product3.jpeg',
  },
  {
    id: 4,
    name: 'Moonbeam Tonal Backpack',
    description: 'Kaslo Backpack | Tech - 30L',
    price: 170,
    image: '/images/product4.jpeg',
  },
  {
    id: 5,
    name: 'Nirvana Backpack',
    description: 'Retreat™ Backpack - 23L',
    price: 80,
    image: '/images/product5.jpeg',
  },
  {
    id: 6,
    name: 'Pond Camo',
    description: 'Heritage™ Backpack | Kids - 15L',
    price: 60,
    image: '/images/product6.jpeg',
  },
  {
    id: 7,
    name: 'Painted Camo',
    description: 'City Backpack - 16L',
    price: 110,
    image: '/images/product7.jpeg',
  },
  {
    id: 8,
    name: 'Leopard Wave Laptop Bag',
    description: 'Retreat™ Backpack - 23L',
    price: 600,
    image: '/images/product8.jpeg',
  },
  {
    id: 9,
    name: 'Black/Saddle Brown Laptop Bag',
    description: 'Classic™ Backpack | XL - 30L | New',
    price: 75,
    image: '/images/product1.jpeg',
  },
];

export default App;
