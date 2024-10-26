import React from 'react'
import Header from './Header';
import Main from './main';
import Footer from './footer';

export default function Home({setCartItem,setCount}) {
  return (
    <>
      <Header/>
      <Main setCartItem={setCartItem} setCount={setCount}/>
      <Footer/>
      </>
      
    
  )
}
