import React from 'react';
import { connect } from 'react-redux';
import { getImage, setTerm } from '../../actions'

class SearchImage extends React.Component {
  
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.getImage()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text" 
            value={this.props.term} 
            onChange={e => this.props.setTerm(e.target.value)}
            onBlur={this.onFormSubmit}
            placeholder="Search image..." 
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    term: state.term
  }
}

const mapDispatchToProps = { getImage, setTerm } 

export default connect(mapStateToProps, mapDispatchToProps)(SearchImage)