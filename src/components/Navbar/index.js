import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavbarContainer, Logo, Counter } from './styled.js'

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <Logo><Link to={'/'}>Quote Maker</Link></Logo>
      <Counter>Quotes: {props.quotesLength}</Counter>
    </NavbarContainer>
  )
}

const mapStateToProps = state => {
  return {
    quotesLength: state.quotes.list.length
  }
}

export default connect(mapStateToProps)(Navbar);