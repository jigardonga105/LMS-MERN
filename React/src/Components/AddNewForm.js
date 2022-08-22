import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddNewForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [desc, setDesc] = useState("");

    const navigate = useNavigate();

    const addBookFunc = (e) => {
        e.preventDefault();
        if (!title || !desc || !author) {
            alert("Title or Description or Author cannot be blank");
        }
        else {

            axios.post('/api/addBook', { title, desc, author })
                .then(res => {
                    let newBook = res.data;
                    // console.log(newBook);
                })
                .catch(err => {
                    console.log(err);
                });

            setTitle("");
            setAuthor("");
            setDesc("");

            document.getElementById('sucessAlert').style.display = "block";
            
            setTimeout(() => {
                document.getElementById('sucessAlert').style.display = "none";

                navigate("/allBooks");
            }, 2000);
        }
    }

    return (
        <>
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

                <p className="sucessAlert" id="sucessAlert">*Book has been added successfully!</p>
            </form>
        </>
    )
}

export default AddNewForm
