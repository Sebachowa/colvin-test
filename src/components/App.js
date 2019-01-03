import React from 'react';
import styled from "styled-components"

import QuoteList from './QuoteList'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 50px);
`

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Content>
        <Sidebar />
        <QuoteList />
      </Content>
    </Wrapper>
  )
};

export default App;