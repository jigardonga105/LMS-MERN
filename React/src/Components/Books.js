import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Book from './Book';
import '../css/Index.css';

const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('/api/allBooks')
            .then(res => {
                let allBooks = res.data;
                console.log(allBooks);
                setBooks(allBooks);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h3 style={ { marginLeft: "15%" } }>Books:</h3>
            <div className="container row allBooksDiv">
                {books.map(book => <Book key={book._id} book={book} />)}
            </div>
        </>
    )
}

export default Books
