import React from 'react'
import { connect } from 'react-redux'
import { getQuote } from '../../actions'

import ShowSidebar from './../ShowSidebar'

import { Container, CardContainer, Card, QuoteContent, QuoteBody, QuoteAuthor } from './styled.js'


class QuoteShow extends React.Component {
  
  componentDidMount() {
    const { quotesLength, history, getQuote, match } = this.props;
    if (!quotesLength) {
      history.push('/')
    } 
    getQuote(match.params.id)
  }

  render () {
    const { image, content, author } = this.props.quote;
    return (
      <Container>
        <ShowSidebar />
        { this.props.quote ? <CardContainer>
            <Card image={image}>
              <QuoteContent>
                <QuoteBody>{content}</QuoteBody>
                <QuoteAuthor>{author}</QuoteAuthor>
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
