import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addQuote } from './../../actions'
import { FormContainer, Form, Input, Textarea, Button, ErrorContainer, Error, Label } from './styled.js'

class QuoteInput extends React.Component {
  onSubmit = (formValues) => {
    this.props.addQuote(formValues)
  }

  renderError({ error, touched}) {
    if ( touched && error) {
      return (
        <Error>{error}</Error>
      )
    }
  }

  renderTextArea = ({ input, meta }) => {
    return (
      <div>
        <Label>{input.name.charAt(0).toUpperCase() + input.name.slice(1)}</Label>
        <Textarea
          {...input}
          placeholder="I know that I know nothing"
          image={this.props.image}
          font={this.getFontSize}
          type="text"
          value={this.props.randomContent}
        />
        <ErrorContainer>
          {this.renderError(meta)}
        </ErrorContainer>
      </div>
    )
  }

  renderInput = ({ input, meta }) => {
    return (
      <div>
        <Label>{input.name.charAt(0).toUpperCase() + input.name.slice(1)}</Label>
        <Input 
          {...input} 
          placeholder="Plato" 
          image={this.props.image} 
          autoComplete="off"
          value={this.props.randomAuthor} 
        />
        <ErrorContainer>
          {this.renderError(meta)}
        </ErrorContainer>
      </div>
    )
  }

  renderImage = ({ input, meta }) => {
      this.props.change('image', this.props.image);
    return (
      <div>
        <input
          {...input}
          type="hidden"
        />
        <ErrorContainer>
          {this.renderError(meta)}
        </ErrorContainer>
      </div>
    )
  }
  
  render() {
    return (
      <FormContainer image={this.props.image}>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="image" image={this.props.image} component={this.renderImage}/>
          <Field name="content" component={this.renderTextArea} />
          <Field name="author" component={this.renderInput} />
          <Button>Add quote</Button>
        </Form>
      </FormContainer>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.content) {
    errors.content = "Please write something!";
  }

  if (!formValues.author) {
    errors.author = "Please enter an author!";
  }

  if (!formValues.image) {
    errors.image = "Please selected an image!";
  } 

  return errors;
}

const mapStateToProps = (state) => {
  return {
    image: state.quotes.image
  }
}

const formWrapped = reduxForm({
  form: 'quoteCreate',
  validate
})(QuoteInput)

export default connect(mapStateToProps, { addQuote })(formWrapped)