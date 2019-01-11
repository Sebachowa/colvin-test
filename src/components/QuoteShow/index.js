import React from 'react'
import { connect } from 'react-redux'
import { getQuote } from '../../actions'

import ShowSidebar from './../ShowSidebar'

import { Container, CardContainer, Card, QuoteContent, QuoteBody, QuoteAuthor } from './styled.js'


class QuoteShow extends React.Component {
  componentDidMount() {
    if (!this.props.quotesLength) {
      this.props.history.push('/')
    } 
    this.props.getQuote(this.props.match.params.id)
  }

  render () {
    return (
      <Container>
        <ShowSidebar />
        { this.props.quote ? <CardContainer>
            <Card image={this.props.quote.image}>
              <QuoteContent>
                <QuoteBody>{this.props.quote.content}</QuoteBody>
                <QuoteAuthor>{this.props.quote.author}</QuoteAuthor>
              </QuoteContent>
            </Card>
          </CardContainer> : null
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quotesLength: state.quotes.list.length,
    quote: state.quotes.selectedQuote
  }
}

const mapDispatchToProps = {
  getQuote
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteShow)
