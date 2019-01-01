import React from 'react';
import './tabStyle.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { SidebarContainer } from './styled.js'
import QuoteInput from '../QuoteInput'
import SearchImage from '../SearchImage'
import RandomSelector from '../RandomSelector'



const Sidebar = (props) => {
  return (
    <SidebarContainer>
      <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
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
          <QuoteInput />
        </TabPanel>
      </Tabs>
    </SidebarContainer>
  )
}

export default Sidebar;