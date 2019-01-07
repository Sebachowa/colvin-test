import './tabStyle.css';

import React from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

import { SidebarContainer } from './styled.js'
import QuoteInput from '../QuoteInput'
import SearchImage from '../SearchImage'
import RandomSelector from '../RandomSelector'
import { addQuote } from '../../actions';

class Sidebar extends React.Component {
  state = {
    selectedImage: '',
    content: '',
    author: ''
  }

  onSearchImageSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { 
        query: term,
        orientation: 'squarish'
      },
      headers: {
        Authorization: 'Client-ID caf295221fb949ce9661404707301ecbf00021083633bd3e5e3827278b3fef54'
      }
    })
    if (response.data.results.length) {
      const randomImage = response.data.results[Math.floor(Math.random() * response.data.results.length)]
      this.setState({ selectedImage: randomImage.urls.regular })
    }
  }

  onRandomImageSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        orientation: 'squarish'
      },
      headers: {
        Authorization: 'Client-ID caf295221fb949ce9661404707301ecbf00021083633bd3e5e3827278b3fef54'
      }
    })
    this.setState({ selectedImage: response.data.urls.regular })
  }

  onRandomQuoteSubmit = async () => {
    const response = await axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    let content = response.data[0].content
    let author = response.data[0].title

    if (content.length > 70 || content.includes("&#")) {
      this.onRandomQuoteSubmit()
      return;
    }
    
    content = content.replace('<p>', "")
    content = content.replace('</p>', "")
    content = content.replace('.', "")
    content = content.trim()
    console.log(content)
    this.setState({ content, author })
  }

  onQuoteSubmit = (quote) => {
    const { addQuote } = this.props;
    addQuote(quote);
  }

  render() {
    return (
      <SidebarContainer>
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab>Create Quote</Tab>
            <Tab>Lazy Mode</Tab>
          </TabList>
          <TabPanel>
            <SearchImage
              onSubmit={this.onSearchImageSubmit}
            />
            <QuoteInput
              onSubmit={this.onQuoteSubmit}
              image={this.state.selectedImage}
              isRandom={false}
            />
          </TabPanel>
          <TabPanel>
            <RandomSelector 
              onRandomQuoteSubmit={this.onRandomQuoteSubmit}
              onRandomImageSubmit={this.onRandomImageSubmit}
            />
            <QuoteInput
              onSubmit={this.onQuoteSubmit}
              isRandom={true}
              image={this.state.selectedImage}
              author={this.state.author}
              content={this.state.content}
            />
          </TabPanel>
        </Tabs>
      </SidebarContainer>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, { addQuote })(Sidebar);