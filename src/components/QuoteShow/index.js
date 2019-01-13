import React from 'react'
import { connect } from 'react-redux'
import { getQuote, editQuote, setNormalMode } from '../../actions'
import ShowSidebar from './../ShowSidebar'
import { Container, CardContainer, MessageContainer, ButtonContainer, Button, Card, QuoteContent, QuoteBody, QuoteAuthor } from './styled.js'

class QuoteShow extends React.Component {
  content = React.createRef();
  author = React.createRef();

  componentDidMount() {
    const { quotesLength, history, getQuote, match } = this.props;
    if (!quotesLength) {
      history.push('/')
    } 
    getQuote(match.params.id)
  }

  submitEditedQuote = () => {
    const id = this.props.match.params.id
    const content = this.content.current.innerText
    const author = this.author.current.innerText
    const image = this.props.quote.image
    const quote = { id, content, author, image }
    this.props.editQuote(quote)
    this.props.setNormalMode()
  }

  render () {
    const { image, content, author } = this.props.quote;
    return (
      <Container>
        <ShowSidebar />
        { this.props.quote ? <CardContainer>
            <MessageContainer>
              { this.props.isEdit ? <h3>Click the text to edit the quote</h3> : null}
            </MessageContainer>
            <Card image={image}>
              <QuoteContent>
                <QuoteBody ref={this.content} contentEditable={this.props.isEdit}>{content}</QuoteBody>
                <QuoteAuthor ref={this.author} contentEditable={this.props.isEdit}>{author}</QuoteAuthor>
              </QuoteContent>
            </Card>
            <ButtonContainer>
              { this.props.isEdit ? <Button onClick={this.submitEditedQuote}>Save</Button> : null }
            </ButtonContainer>
          </CardContainer> : null
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quotesLength: state.quotes.list.length,
    quote: state.quotes.selectedQuote,
    isEdit: state.quotes.isEdit
  }
}

const mapDispatchToProps = {
  getQuote,
  editQuote,
  setNormalMode
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteShow)
