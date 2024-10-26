import React from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 30px rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const StyledCart = styled.div`
  border: solid 1px #ccc;
  padding: 20px;
  border-radius: 5px;
  color: black;
  position: relative;
  top: 80px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const StyledProductName = styled.h3`
  font-size: 20px;
  color: #555;
  margin: 0;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledPrice = styled.p`
  font-size: 18px;
  color: #888;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledButton = styled.button`
  width: 90px;
  height: 40px;
  font-size: 15px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  padding: 5px 5px;
  background: red;
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 35px;
    font-size: 14px;
  }
`;

export default function Cart({ setCartItem, cartItem }) {
  const handleRemoveItem = (itemId) => {
    setCartItem((preItems) => preItems.filter(item => item.id !== itemId));
    toast.success('Article supprimé du panier.');
  };

  return (
    <StyledCart>
      <StyledTitle>Votre panier</StyledTitle>
      {cartItem.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        cartItem.map((item) => (
          <CartItem key={item.id}>
            <StyledImage src={item.img} alt={item.name} />
            <StyledProductName>Nom du produit : {item.name}</StyledProductName>
            <StyledPrice>Prix : {item.price}</StyledPrice>
            <StyledButton onClick={() => handleRemoveItem(item.id)}>Supprimer</StyledButton>
          </CartItem>
        ))
      )}
      <ToastContainer />
    </StyledCart>
  );
}
