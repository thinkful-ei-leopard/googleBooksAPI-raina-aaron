import React from 'react'


function Book(props) {
    console.log(props.book.volumeInfo)
    let image = ''
    if (props.book.volumeInfo.imageLinks) {
        image= <img src= {props.book.volumeInfo.imageLinks.thumbnail} className='book-imgURL' alt='thumbnail'></img>; 
    }
    return (
        <div className='book'>
            <li className='book-list'>
                {image}
                <div className= 'book-details'>
                    <h2 className='book-title'> {props.book.volumeInfo.title} </h2>
                    <p className='book-author'> {props.book.volumeInfo.authors} </p>
                    <p className='book-description'> {props.book.volumeInfo.description} </p>
                </div>
            </li>
        </div>
    )
}

export default Book