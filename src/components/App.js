import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components"
import QuoteList from './QuoteList'
import QuoteShow from "./QuoteShow";
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
    <Router>
      <Wrapper>
        <Navbar />
          <Content>
            <Route exact path="/" component={QuoteList} />
            <Route path="/quotes/:id" component={QuoteShow} />
          </Content>
      </Wrapper>
    </Router>
  )
};

export default App;