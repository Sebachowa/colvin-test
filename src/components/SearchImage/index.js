import React from 'react';
import { connect } from 'react-redux';
import { getImage, setTerm, removeImage } from '../../actions'
import { FormContainer, Input, ImageContainer, Image, Button, Label } from './styled.js'
import imagePlaceholder from './../../images/image-placeholder.png';

class SearchImage extends React.Component {
  
  onFormSubmit = (event) => {
    event.preventDefault();
    const { term, getImage, removeImage } = this.props;
    term ? getImage() : removeImage()
  }

  render() {
    const { image, term, setTerm } = this.props;
    return (
      <div>
        <ImageContainer>
          <Image image={image} placeholder={imagePlaceholder} alt="" />
        </ImageContainer> 
        <Label>Image</Label>
        <FormContainer onSubmit={this.onFormSubmit}>
          <Input
            type="text" 
            value={term} 
            onChange={e => setTerm(e.target.value)}
            placeholder="angry, happy, people, party, etc..." 
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

const mapDispatchToProps = { getImage, setTerm, removeImage } 

export default connect(mapStateToProps, mapDispatchToProps)(SearchImage)