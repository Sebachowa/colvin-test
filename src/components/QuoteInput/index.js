import React from 'react'
import { QuoteContainer, Form, Input, Textarea } from './styled.js'

class QuoteInput extends React.Component {
  state = {
    image: '',
    content: '',
    author: '',
    errorMessage: ''
  }
  
  onQuoteSubmit = (event) => {
    const { content, author} = this.state;
    const { image, onSubmit} = this.props;
    event.preventDefault();
    if (!image) this.setState({ errorMessage: 'Please select an image' });
    if (!content) this.setState({ errorMessage: 'Please provide some content' });
    if (!author) this.setState({ errorMessage: 'Please provide an author' });
    if (image && content && author) {
      onSubmit({image, content, author})
      this.setState({ errorMessage: '' })
    };
  }
  
  render() {
    return (
        <QuoteContainer image={this.props.image}>
          <Form onSubmit={this.onQuoteSubmit}>
            <Textarea
              onChange={(e) => this.setState({ content: e.target.value })}
              value={this.state.content} 
              type="text" 
              placeholder="Quote content"
              image={this.props.image}
            />
            <Input 
              onChange={(e) => this.setState({ author: e.target.value})} 
              value={this.state.author} 
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

export default QuoteInput;