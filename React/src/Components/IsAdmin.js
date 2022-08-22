import React, { useState } from 'react'

const IsAdmin = ({ onSubmit }) => {

    const [password, setPassword] = useState("");
    
    const adminPassword = (e) => {
        e.preventDefault();
        if (!password) {
            alert("Password cannot be blank");
        } else if (password !== 'admin') {
            alert("Incorrect Password!");
            setPassword("");
        }
        else {
            setPassword("");
            onSubmit(true)
            // setIsAdmin(true);
        }
    }

    return (
        <div>
            <h3>Admin Section:</h3>

            <form onSubmit={ adminPassword }>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="admin@LMS.com"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } className="form-control" id="inputPassword"/>
                    </div>
                </div>

                <button type="submit" className="btn btn-success" style={{ marginLeft: "45%" }}>Submit</button>
            </form>
        </div>
    )
}

export default IsAdmin
