import React from 'react';

class Search extends React.Component {
    state = {
     printType: '',
     searchTerm: ''  
    }

    handleSearchInput = (event) => {
        this.setState({
          searchTerm: event.target.value,
        });
    }

    handleFilterInput = (event) => {
        this.setState({
            printType: event.target.value,
          });
    }

    render () {
        return (
            <div>
                <form onSubmit={e => this.props.handleSubmit(e, {printType:this.state.printType, q:this.state.searchTerm})}>
                    <label>Search</label>
                    <input type='text' name='q' className='search-bar' placeholder='Search a book' onChange={ this.handleSearchInput } />
                    <button type='submit'>Search for Books!</button>
                    <div className='filter-bar'>
                    <label>Print Type</label>   
                    <select name='printType' onChange={ this.handleFilterInput }>
                        <option value='all'>All</option>
                        <option value='books'>Books</option>
                        <option value='magazines'>Magazines</option>
                    </select>
                
                    </div>

                </form>
            </div>
        )
    };
}

export default Search;