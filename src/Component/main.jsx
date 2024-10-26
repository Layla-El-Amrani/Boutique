import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Styledslider = styled.div`
  color: white;
  padding: 200px 20px;
  background-color: black;
  text-align: center;
  font-size: 20px;
  background-image: url(${(props) => props.bgImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const StyledParagraph = styled.p`
  font-size: 30px;
  color: #ffffff;
  text-shadow: 2px 6px 8px rgba(0, 0, 0, 0.7);
`;

const Styledytitle = styled.h1`
  font-size: 30px;
  color: #ffffff;
  text-shadow: 2px 9px 8px rgba(0, 0, 0, 0.7);
`;

const StyleCarts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
`;

const StyleCart = styled.div`
  text-align: center;
  margin: auto;
  border-radius: 10px;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.2),   
    0 6px 20px rgba(0, 0, 0, 0.19);
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 40px;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 
      0 8px 16px rgba(0, 0, 0, 0.2),   
      0 12px 30px rgba(0, 0, 0, 0.19);
  }
`;

const Styledimg = styled.img`
  width: 330px;
  height: 200px;
  border-radius: 10px;
`;

const Styledh1 = styled.h1`
  font-size: 20px;
`;

const Styledp = styled.p`
  font-size: 20px;
`;

const Styledbutton = styled.button`
  font-size: 16px;
  border-radius: 25px;
  margin: 10px;
  cursor: pointer;
  padding: 12px 20px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;

  &:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.6);
  }
`;

export default function Main({ setCartItem, setCount }) {
  const images = ["image/bg1.jpg", "/image/bg2.jpg", "/image/bg3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const AddToCart = (item) => {
    setCartItem((prevItems) => [...prevItems, item]);
    setCount((prevCount) => prevCount + 1);
    toast(`${item.name} has been added to your cart!`);
  };

  const products = [
    { id: 1, name: "Montre Classique", price: "$150.00", img: "Boutique/image/4.jpg" },
    { id: 2, name: "Montre Sportive", price: "$200.00", img: "Boutique/image/1.avif" },
    { id: 3, name: "Montre de Luxe", price: "$800.00", img: "Boutique/image/5.jpg" },
    { id: 4, name: "Montre Étanche", price: "$120.00", img: "Boutique/image/2.avif" },
    { id: 5, name: "Montre Minimaliste", price: "$100.00", img: "Boutique/image/4.avif" },
    { id: 6, name: "Montre Connectée", price: "$250.00", img: "Boutique/image/4.jpeg" },
    { id: 7, name: "Montre en Bois", price: "$130.00", img: "Boutique/image/4.jpg" },
    { id: 8, name: "Montre Automatique", price: "$500.00", img: "Boutique/image/5.jpg" },
    { id: 9, name: "Montre Vintage", price: "$300.00", img: "Boutique/image/6.jpg" },
  ];

  return (
    <>
      <Styledslider bgImage={images[currentImageIndex]}>
        <Styledytitle>Découvrez notre collection de montres</Styledytitle>
        <StyledParagraph>Trouvez la montre parfaite pour chaque occasion</StyledParagraph>
      </Styledslider>
      <StyleCarts>
        {products.map((product) => (
          <StyleCart key={product.id}>
            <Styledimg src={product.img} />
            <Styledh1>{product.name}</Styledh1>
            <Styledp>{product.price}</Styledp>
            <Styledbutton onClick={() => AddToCart(product)}>
              Add to cart
            </Styledbutton>
          </StyleCart>
        ))}
      </StyleCarts>
      <ToastContainer />
    </>
  );
}
