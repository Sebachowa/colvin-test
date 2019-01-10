import React from 'react';
import { connect } from 'react-redux';
import { getImage, setTerm } from '../../actions'
import { FormContainer, Input, ImageContainer, Image, Button, Label } from './styled.js'
import imagePlaceholder from './../../images/image-placeholder.png';

class SearchImage extends React.Component {
  
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.getImage()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <ImageContainer>
          <Image image={this.props.image} placeholder={imagePlaceholder} alt="" />
        </ImageContainer> 
        <Label>Image</Label>
        <FormContainer onSubmit={this.onFormSubmit}>
          <Input
            type="text" 
            value={this.props.term} 
            onChange={e => this.props.setTerm(e.target.value)}
            // onBlur={this.onFormSubmit}
            placeholder="angry, happy, people, etc..." 
          />
          <Button>Go</Button>
        </FormContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    term: state.quotes.term,
    image: state.quotes.image
  }
}

const mapDispatchToProps = { getImage, setTerm } 

export default connect(mapStateToProps, mapDispatchToProps)(SearchImage)