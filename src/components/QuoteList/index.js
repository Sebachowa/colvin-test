import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuoteCard from '../QuoteCard'
import { List } from './styled.js'

class QuoteList extends Component {
  renderList = () => {
    return this.props.quotes.map((quote) => {
      return <QuoteCard key={quote.id} quote={quote} />
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
    quotes: state.quotes.list
  }
}

export default connect(mapStateToProps)(QuoteList)