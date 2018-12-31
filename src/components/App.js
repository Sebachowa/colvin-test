import React from 'react';
import styled from "styled-components"

import CardList from './CardList'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
`

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Content>
        <Sidebar />
        <CardList />
      </Content>
    </Wrapper>
  )
};

export default App;