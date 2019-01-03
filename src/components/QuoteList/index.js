import React, { Component } from 'react'
import { connect } from 'react-redux'

import Quote from '../QuoteCard'
import { List } from './styled.js'

class QuoteList extends Component {
  renderList = () => {
    return this.props.quotes.map((card) => {
      return <Quote key={card.id}>{card.content}</Quote>
    })
  }

  render() {
    return (
      <List>{this.renderList()}</List>
    )
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }

}

export default connect(mapStateToProps)(QuoteList)