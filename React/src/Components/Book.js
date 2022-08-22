import React from 'react'
import {Link} from 'react-router-dom';

const Book = ({book}) => {
    return (
        <div className="col singleBookCard">
            <div className="card" style={{ width: "18rem", margin: "auto" }}>
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                    <p className="card-text">{book.desc}</p>

                    <button type="submit" className="btn btn-success btn-sm">Get</button>
                    <button type="submit" className="btn btn-danger btn-sm" style={{marginLeft: "15px"}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Book
