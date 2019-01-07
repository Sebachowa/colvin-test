import React from 'react'
import { connect } from 'react-redux';
import { QuoteContainer, Form, Input, Textarea } from './styled.js'
import { addQuote } from './../../actions'

class QuoteInput extends React.Component {
  state = {
    author: '',
    content: '',
    errorMessage: ''
  }

  onQuoteSubmit = (event) => {
    const { image, isRandom } = this.props;
    const { content, author } = this.state;
    event.preventDefault();
    if (isRandom) {
      this.props.addQuote({image, content: this.props.content, author: this.props.author})
      this.setState({ errorMessage: '' })
    } else {
      this.props.addQuote({image, content, author})
      this.setState({ errorMessage: '' })
    }
  }
  
  render() {
    return (
      <QuoteContainer image={this.props.image}>
        <Form onSubmit={this.onQuoteSubmit}>
          <Textarea
            onChange={(e) => this.props.isRandom ? null : this.setState({ content: e.target.value })}
            value={this.props.isRandom ? this.props.content : this.state.content} 
            type="text" 
            placeholder="Quote content"
            image={this.props.image}
          />
          <Input 
            onChange={(e) => this.props.isRandom ? null : this.setState({ author: e.target.value })} 
            value={this.props.isRandom ? this.props.author : this.state.author} 
            type="text" 
            placeholder="Author"
            image={this.props.image}
          />
          <input type="submit"/>
        </Form>
        <p>{this.state.errorMessage}</p>
      </QuoteContainer>
    )
  }
}

const mapDispatchToProps = {
  addQuote
}

export default connect(null, mapDispatchToProps)(QuoteInput);