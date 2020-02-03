import React from 'react';

class Search extends React.Component {
    render () {

    return (
        <div>
            <form onSubmit={this.props.handleSearch}>
                <label>Search</label>
                <input type='text' name='q' className='search-bar' placeholder='Search a book' />
                <button type='submit'>Search for Books!</button>
                <div className='filter-bar'>
                <label>Print Type</label>   
                <select name='printType'>
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