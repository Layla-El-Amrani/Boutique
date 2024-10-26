import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #004080;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: white;
  font-size: 26px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px; /* Ajuste en fonction de la hauteur de ta navbar */
    left: 0;
    background: #004080;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const NavItem = styled.li`
  margin: 0 20px;
  
  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #2980b9;
    transform: translateY(-2px);
  }
`;

const StyledCart = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 16px;
  border: 1px solid #2980b9;
  border-radius: 5px;
  padding: 5px 10px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(41, 128, 185, 0.1);
  }
`;

const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  .bar {
    height: 4px;
    width: 30px;
    background: white;
    margin: 3px 0;
    transition: 0.3s;
  }
`;

export default function Navbar({ count }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavBar>
      <Logo>Shop</Logo>
      <MenuToggle onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </MenuToggle>
      <NavList isOpen={isOpen}>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/about">About</NavLink></NavItem>
        <NavItem>
          <NavLink to="/cart">
            <StyledCart>Cart ({count})</StyledCart>
          </NavLink>
        </NavItem>
        <NavItem><NavLink to="/Product">Product</NavLink></NavItem>
      </NavList>
    </StyledNavBar>
  );
}
