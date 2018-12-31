import React from 'react';
import CardList from './CardList'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <CardList />
    </div>
  )
};

export default App;