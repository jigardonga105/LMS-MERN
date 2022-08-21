import React from 'react'

const Book = ({book}) => {
    return (
        <div className="col singleBookCard">
            <div className="card" style={{ width: "18rem", margin: "auto" }}>
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                    <p className="card-text">{book.desc}</p>
                    {/* <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    )
}

export default Book
