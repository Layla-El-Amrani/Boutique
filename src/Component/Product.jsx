import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: green;
  margin-top: 10px;
  color: white;
  margin-left:50px;
`;

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const StyledTh = styled.th`
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  text-align: left;
`;

const StyledTd = styled.td`
  padding: 5px 20px;
  border: 1px solid #ddd;
  text-align: left;
`;

const StyleImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export default function Product({ products }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/AddProduct');
  };

  return (
    <>
      <StyledButton onClick={handleClick}>Ajouter produit</StyledButton>
      <StyleDiv>
        <StyledTable>
          <thead>
            <tr>
              <StyledTh>Image</StyledTh>
              <StyledTh>ID</StyledTh>
              <StyledTh>Nom</StyledTh>
              <StyledTh>Prix</StyledTh>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <StyledTd>
                  <StyleImage src={product.img} alt={product.name} />
                </StyledTd>
                <StyledTd>{product.id}</StyledTd>
                <StyledTd>{product.name}</StyledTd>
                <StyledTd>{product.price}</StyledTd>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyleDiv>
    </>
  );
}
