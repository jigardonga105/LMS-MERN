import React, { useState } from 'react'
import axios from 'axios';

const AddBook = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [desc, setDesc] = useState("");

    const addBookFunc = (e) => {
        e.preventDefault();
        if (!title || !desc || !author) {
            alert("Title or Description or Author cannot be blank");
        }
        else {

            axios.post('/api/addBook', { title, desc, author })
                .then(res => {
                    let newBook = res.data;
                    console.log(newBook);
                })
                .catch(err => {
                    console.log(err);
                });

            setTitle("");
            setAuthor("");
            setDesc("");
        }
    }

    return (
        <div className='container addBookContainer'>
            <h3>Add a new Book:</h3>

            <form onSubmit={addBookFunc}>
                <div className="mb-3">
                    <label className="form-label">Book Name:</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="title" placeholder="Title of the Book" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Author Name:</label>
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" className="form-control" id="author" placeholder="Author Name or Publication Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className="form-control" id="desc" placeholder="Details of the Book" />
                </div>

                <button type="submit" className="btn btn-success" style={{ marginLeft: "45%" }}>Add</button>
            </form>
        </div>
    )
};

export default AddBook
