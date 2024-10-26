import { Routes, Route } from 'react-router-dom';
import React, { useState } from "react";

import Home from './Component/Home';
import About from './Component/About';
import Cart from './Component/Cart';
import Product from './Component/Product';
import AddProduct from './Component/AddProduct';

export default function RouterMiddlware({ setCount }) {
  const [cartItem, setCartItem] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Montre Classique", price: "$150.00", img: "/image/4.jpg" },
    { id: 2, name: "Montre Sportive", price: "$200.00", img: "/image/1.avif" },
    { id: 3, name: "Montre de Luxe", price: "$800.00", img: "/image/5.jpg" },
    { id: 4, name: "Montre Étanche", price: "$120.00", img: "/image/2.avif" },
    { id: 5, name: "Montre Minimaliste", price: "$100.00", img: "/image/4.avif" },
    { id: 6, name: "Montre Connectée", price: "$250.00", img: "/image/4.jpeg" },
    { id: 7, name: "Montre en Bois", price: "$130.00", img: "/image/4.jpg" },
    { id: 8, name: "Montre Automatique", price: "$500.00", img: "/image/5.jpg" },
    { id: 9, name: "Montre Vintage", price: "$300.00", img: "/image/6.jpg" },
  ]);

  const handleAddProduct = (formData) => {
    // Convertir FormData en un objet simple si nécessaire
    const newProduct = {
      id: products.length + 1,
      name: formData.get('name'),
      price: formData.get('price'),
      img: URL.createObjectURL(formData.get('img')), // Crée une URL pour l'image
    };
  
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  return (
    <Routes>
      <Route path="/" element={<Home setCartItem={setCartItem} setCount={setCount} />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart cartItem={cartItem} setCartItem={setCartItem} />} />
      <Route path="/product" element={<Product products={products} />} />
      <Route path="/AddProduct" element={<AddProduct onAddProduct={handleAddProduct} />} />
    </Routes>
  );
}
