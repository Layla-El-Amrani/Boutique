import React from 'react';
import styled from "styled-components";

const StyledSlider = styled.div`
  color: white;
  padding: 200px 20px;
  background-color: black;
  text-align: center;
  font-size: 20px;
  background-image: url('/image/4.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 150px 10px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 36px;
  color: #ffffff; 
  text-shadow: 2px 6px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Styledh1 = styled.h1`
  font-size: 36px;
  color: black; 
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  color: black;
  margin: 20px auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 10px auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 20px;
  background-color: rgba(255, 255, 255, 0.9); 
  margin: auto; 
  color: black;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0 0 20px 0;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #004080;
  color: white;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export default function About() {
  return (
    <div>
      <StyledSlider>
        <StyledTitle>About Us</StyledTitle>
      </StyledSlider>
      
      <ContentWrapper>
        <Image src="/image/4.jpg" alt="About Us" />
        <div>
          <Styledh1>About Us</Styledh1>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo itaque ullam repudiandae! Itaque illum enim voluptas? Placeat rerum, voluptate accusantium qui ea provident molestias corporis modi facilis. Reprehenderit, autem harum.
          </StyledParagraph>
          <StyledParagraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem mollitia quaerat nulla et excepturi similique voluptate doloremque pariatur nesciunt voluptates dolor dolores, incidunt repellendus consectetur. Ad architecto culpa veniam?
          </StyledParagraph>
        </div>
      </ContentWrapper>

      <Footer>
        © {new Date().getFullYear()} All rights reserved.
      </Footer>
    </div>
  );
}
