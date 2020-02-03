import React from 'react'


function Book(props) {
    let title;
    let author;
    let imgURL;
    let description;
    let cost;


    return (
        <div className='book'>
            <li className='book-list'>
                <img src= { imgURL } className='book-imgURL'></img>
                <div className= 'book-details'>
                    <h2 className='book-title'> { title} </h2>
                    <p className='book-author'> { author } </p>
                    <p className='book-description'> { description } </p>
                    <p className='book-cost'> { cost } </p>
                </div>
            </li>
        </div>
    )
}

export default Book