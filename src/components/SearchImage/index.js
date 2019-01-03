import React from 'react';

class SearchImage extends React.Component {
  state = {
    term: '',
    selectedImage: ''
  }

  onFormSubmit = async (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} ref="myForm">
          <input 
            type="text" 
            value={this.state.term} 
            onChange={e => this.setState({ term: e.target.value })}
            onBlur={this.onFormSubmit}
            placeholder="Search image..." 
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SearchImage
