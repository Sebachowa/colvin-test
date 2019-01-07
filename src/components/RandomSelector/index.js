import React from 'react';
import { connect } from 'react-redux';
import { fetchRandomImage, getRandomQuote } from '../../actions'


class RandomSelector extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.getRandomQuote}>Random quote</button>
        <button onClick={this.props.fetchRandomImage}>Random image</button>
      </div>
    )
  }
}

export default connect(null, { fetchRandomImage, getRandomQuote })(RandomSelector)
