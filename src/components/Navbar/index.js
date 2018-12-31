import React from 'react';
import {
  NavbarContainer,
  Logo,
  Counter
} from './styled.js'

const Navbar = (props) => {
  const quotes = 10; // Replace this by props.quotes.length

  return (
    <NavbarContainer>
      <Logo>Quote Maker</Logo>
      <Counter>Quotes: {quotes}</Counter>
    </NavbarContainer>
  )
}

export default Navbar;