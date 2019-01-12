import React from 'react';
import { connect } from 'react-redux';
import { getRandomQuote } from '../../actions'
import { ButtonContainer, Button } from './styled.js'


const RandomSelector = (props) => {
  return (
    <ButtonContainer>
      <p>Too lazy to write?</p>
      <p>Just click the button</p>
      <Button onClick={props.getRandomQuote}>Get</Button>
    </ButtonContainer>
  )
}

const mapDispatchToProps = { getRandomQuote }

export default connect(null, mapDispatchToProps)(RandomSelector)
