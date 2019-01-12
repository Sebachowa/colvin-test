import React from 'react'
import { connect } from 'react-redux'
import QuoteCard from '../QuoteCard'
import HomeSidebar from '../HomeSidebar'
import { List, Container } from './styled.js'

const QuoteList = (props) => {
  return (
    <Container>
      <HomeSidebar />
      <List>
        {props.quotes.map((quote) => {
          return <QuoteCard key={quote.id} quote={quote} />
        })}
      </List>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.list
  }
}

export default connect(mapStateToProps)(QuoteList)