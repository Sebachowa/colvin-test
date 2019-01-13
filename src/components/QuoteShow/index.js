import React from 'react'
import { connect } from 'react-redux'
import html2canvas from 'html2canvas'
import * as jsPDF from 'jspdf'
import { getQuote, editQuote, setNormalMode, removeQuote } from '../../actions'
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

  onQuoteRemove = () => {
    const id = this.props.match.params.id
    this.props.removeQuote(id)
    this.props.setNormalMode()
    this.props.history.push('/')
  }

  renderMessage = () => {
    if (this.props.isEdit) {
      return <h3>Click the text to edit the quote</h3>
    }

    if (this.props.isDelete) {
      return (
        <div>
          <h3>Are you sure you want to delete this quote?</h3>
          <Button danger onClick={this.onQuoteRemove}>Yes</Button>
          <Button onClick={() => this.props.setNormalMode()}>No</Button>
        </div>
      )
    }
    return null
  }

  renderSaveButton = () => {
    if (this.props.isEdit) {
      return <Button onClick={this.submitEditedQuote}>Save</Button>
    }
    return null;
  }

  exportToPDF() {
    const card = document.getElementById('card');

    html2canvas(card, { 
      logging: true,
      useCORS: true,
      taintTest : true
    })
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 25, 25);
      pdf.save("download.pdf");
    })
  }
  
  render () {
    const { image, content, author } = this.props.quote;
    return (
      <Container>
        <ShowSidebar onExportToPDF={this.exportToPDF}/>
        { this.props.quote ? <CardContainer>
            <MessageContainer>
              {this.renderMessage()}
            </MessageContainer>
            <Card id="card" image={image}>
              <QuoteContent>
                <QuoteBody ref={this.content} contentEditable={this.props.isEdit}>{content}</QuoteBody>
                <QuoteAuthor ref={this.author} contentEditable={this.props.isEdit}>{author}</QuoteAuthor>
              </QuoteContent>
            </Card>
            <ButtonContainer>
              {this.renderSaveButton()}
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
    isEdit: state.quotes.isEdit,
    isDelete: state.quotes.isDelete
  }
}

const mapDispatchToProps = {
  getQuote,
  editQuote,
  setNormalMode,
  removeQuote
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteShow)
