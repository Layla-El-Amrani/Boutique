import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 10px;
`;

export default function AddProduct({ onAddProduct }) {
  const [product, setProduct] = useState({ name: '', price: '', img: null });
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, img: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('img', product.img);
    
    onAddProduct(formData); 
    navigate('/product'); 
  };

  return (
    <FormContainer>
      <FormTitle>Ajouter un Produit</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nom :</Label>
          <Input type="text" name="name" value={product.name} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Prix :</Label>
          <Input type="text" name="price" value={product.price} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Image :</Label>
          <Input type="file" name="img" accept="image/*" onChange={handleImageChange} required />
        </FormGroup>
      
        <Button type="submit">Ajouter le produit</Button>
      </form>
    </FormContainer>
  );
}
