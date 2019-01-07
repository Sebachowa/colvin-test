import React from 'react';
import { connect } from 'react-redux';
import { getRandomImage, getRandomQuote } from '../../actions'


const RandomSelector = (props) => {
  return (
    <div>
      <button onClick={props.getRandomQuote}>Random quote</button>
      <button onClick={props.getRandomImage}>Random image</button>
    </div>
  )
}

const mapDispatchToProps = { getRandomImage, getRandomQuote }

export default connect(null, mapDispatchToProps)(RandomSelector)
