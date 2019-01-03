import './tabStyle.css';

import React from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { SidebarContainer } from './styled.js'
import QuoteInput from '../QuoteInput'
import SearchImage from '../SearchImage'
import RandomSelector from '../RandomSelector'

class Sidebar extends React.Component {
  state = {
    selectedImage: ''
  }

  onSearchImageSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID caf295221fb949ce9661404707301ecbf00021083633bd3e5e3827278b3fef54'
      }
    })
    if (response.data.results.length) {
      const randomImage = response.data.results[Math.floor(Math.random() * response.data.results.length)]
      this.setState({ selectedImage: randomImage.urls.regular })
    }
  }

  onQuoteSubmit = (quote) => {
    // agregar la quote al state (redux)
    console.log(quote)
  }

  render() {
    return (
      <SidebarContainer>
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
          <TabList>
            <Tab>Create Quote</Tab>
            <Tab>Lazy Mode</Tab>
          </TabList>
          <TabPanel>
            <SearchImage onSubmit={this.onSearchImageSubmit} />
            <QuoteInput onSubmit={this.onQuoteSubmit} image={this.state.selectedImage}/>
          </TabPanel>
          <TabPanel>
            <RandomSelector />
            <QuoteInput />
          </TabPanel>
        </Tabs>
      </SidebarContainer>
    )
  }
}

export default Sidebar;