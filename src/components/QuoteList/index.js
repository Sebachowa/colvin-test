import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuoteCard from '../QuoteCard'
import HomeSidebar from '../HomeSidebar'
import { List, Container } from './styled.js'

class QuoteList extends Component {
  renderList = () => {
    return this.props.quotes.map((quote) => {
      return <QuoteCard key={quote.id} quote={quote} />
    })
  }

  render() {
    return (
      <Container>
        <HomeSidebar />
        <List>{this.renderList()}</List>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.list
  }
}

export default connect(mapStateToProps)(QuoteList)