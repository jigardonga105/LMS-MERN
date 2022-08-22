import React, { useState } from 'react'
import IsAdmin from "./IsAdmin";
import AddNewForm from "./AddNewForm";

const AddBook = () => {

    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div className='container addBookContainer'>
            {
                isAdmin ? <AddNewForm /> : <IsAdmin onSubmit={val => setIsAdmin(val)} />
            }
        </div>
    )
};

export default AddBook
