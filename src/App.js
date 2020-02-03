import React, { Component } from 'react';

import Header from './components/Header'
import BookList from './components/BookList';
import Search from './components/Search'

class App extends Component {
  
  state = {
    books: [],
    params: {
    printFilter: '',
    q: ''}
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(key => `${encodeURI(key +'='+ params[key])}`);
    return queryItems.join('&');
  }

  handleSubmit = ( event, searchInput ) => {
    event.preventDefault();

    this.setState({
      q: searchInput
    });
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const queryString = this.formatQueryParams(searchInput);
    const url = baseUrl + '?' + queryString;
    

    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return response.json();
      })
      .then(data => {
        console.log('Good response From Google Books API: ', data)


        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }
c

  render() {
    return (
      <div className='App'>
        <Header />

        <Search handleSubmit ={this.handleSubmit}/>

        <BookList books={this.state.books}/>
      </div>
    );
  }
  
}

export default App;