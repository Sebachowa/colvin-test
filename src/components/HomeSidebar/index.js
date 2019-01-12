import './tabStyle.css';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { SidebarContainer } from './styled.js'
import QuoteForm from '../QuoteForm'
import SearchImage from '../SearchImage'
import RandomSelector from '../RandomSelector'

const HomeSidebar = () => {
  return (
    <SidebarContainer>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>Create Quote</Tab>
          <Tab>Lazy Mode</Tab>
        </TabList>
        <TabPanel>
          <SearchImage />
          <QuoteForm />
        </TabPanel>
        <TabPanel>
          <RandomSelector />
        </TabPanel>
      </Tabs>
    </SidebarContainer>
  )
}

export default HomeSidebar;