import React from "react"
import styled from "styled-components"
const StyledParagraph = styled.p`
color:white;
padding:20px 20px;
background-color: #004080; 
text-align:center;
font-size:20px;
margin:0;
`


export default function Footer(){
  
    return(
        <>
        <StyledParagraph>copyright your website 2022</StyledParagraph>
        </>
    )
}