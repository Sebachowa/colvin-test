import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowOptions from './../ShowOptions'
import './tabStyle.css';
import { SidebarContainer } from './styled.js'

const ShowSidebar = props => {
  return (
    <SidebarContainer>
      <Tabs>
        <TabList>
          <Tab>Options</Tab>
        </TabList>
        <TabPanel>
          <ShowOptions onExportToPDF={props.onExportToPDF} />
        </TabPanel>
      </Tabs>
    </SidebarContainer>
  )
}

export default ShowSidebar;