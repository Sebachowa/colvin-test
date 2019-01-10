import './tabStyle.css';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { SidebarContainer } from './styled.js'
import QuoteInput from '../QuoteInput'
import SearchImage from '../SearchImage'
import RandomSelector from '../RandomSelector'

const HomeSidebar = (props) => {
  return (
    <SidebarContainer>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>Create Quote</Tab>
          <Tab>Lazy Mode</Tab>
        </TabList>
        <TabPanel>
          <SearchImage />
          <QuoteInput />
        </TabPanel>
        <TabPanel>
          <RandomSelector />
        </TabPanel>
      </Tabs>
    </SidebarContainer>
  )
}

export default HomeSidebar;