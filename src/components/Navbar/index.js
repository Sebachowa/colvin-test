import React from 'react';
import { connect } from 'react-redux';
import { NavbarContainer, Logo, Counter } from './styled.js'

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <Logo>Quote Maker</Logo>
      <Counter>Quotes: {props.quotes.length}</Counter>
    </NavbarContainer>
  )
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps)(Navbar);