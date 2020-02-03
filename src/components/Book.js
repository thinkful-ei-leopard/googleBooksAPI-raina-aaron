import React from 'react'


function Book(props) {
    
    return (
        <div className='book'>
            <li className='book-list'>
                <img src= {props.book.volumeInfo.imageLinks.thumbnail} className='book-imgURL' alt='thumbnail'></img>
                <div className= 'book-details'>
                    <h2 className='book-title'> {props.book.volumeInfo.title} </h2>
                    <p className='book-author'> {props.book.volumeInfo.author } </p>
                    <p className='book-description'> {props.book.volumeInfo.description} </p>
                </div>
            </li>
        </div>
    )
}

export default Book