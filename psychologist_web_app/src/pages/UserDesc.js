import React from 'react'
import './Form.css';

function UserDesc() {
    return (
        <form className = 'my-form'>
            <label>what seems to be the problem?: 
                <input type="text"/>
            </label>
            <br/>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default UserDesc