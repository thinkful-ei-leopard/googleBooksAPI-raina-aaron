import React, { Component } from 'react';

import Header from './components/Header'
import Book from './components/Book';
import Search from './components/Search'

class App extends Component {
  



  render() {
    return (
      <div className='App'>
        <Header />

        <Search />
        
        <Book />
      </div>
    );
  }
  
}

export default App;