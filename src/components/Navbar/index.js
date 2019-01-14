import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavbarContainer, Logo, Counter } from './styled.js'

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <Link to={'/'}>
        <Logo>Quote Maker</Logo>
      </Link>
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