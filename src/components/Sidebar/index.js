import './tabStyle.css';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

import { SidebarContainer } from './styled.js'
import QuoteInput from '../QuoteInput'
import SearchImage from '../SearchImage'
import RandomSelector from '../RandomSelector'

const Sidebar = (props) => {
  return (
    <SidebarContainer>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>Create Quote</Tab>
          <Tab>Lazy Mode</Tab>
        </TabList>
        <TabPanel>
          <SearchImage />
          <QuoteInput
            image={props.image}
            isRandom={false}
          />
        </TabPanel>
        <TabPanel>
          <RandomSelector />
          <QuoteInput
            isRandom={true}
            image={props.randomImage}
            author={props.randomQuote.author}
            content={props.randomQuote.content}
          />
        </TabPanel>
      </Tabs>
    </SidebarContainer>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    quotes: state.quotes.list,
    image: state.quotes.image,
    randomQuote: state.randomQuote,
    randomImage: state.randomImage
  }
}

export default connect(mapStateToProps)(Sidebar);