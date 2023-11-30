import React from 'react'
import './Form.css';

function Form() {
    return (
        <form className = 'my-form'>
            <label>Enter your name: 
                <input type="text"/>
            </label>
            <br/>
            <label>Enter your age: 
                <input type="text"/>
            </label>
            <br/>
            <label>Enter your Ethnicity: 
                <input type="text"/>
            </label>
            <br/>
            <label>Veteran Status: 
                <select name = "vetStatus">
                    <option value = "active">Active</option>
                    <option value = "retired">Retired</option>
                    <option value = "notVet">Not a Veteran</option>
                </select>
            </label>
            <br/>
            <label>Please describe your history with substance use:
                <input type="text"/>
            </label>
            <br/>
            <label>Education: 
                <select name = "edu">
                <option value = "lowerLever">Less than High School</option>
                    <option value = "highSchool">High School</option>
                    <option value = "someCollege">Some College</option>
                    <option value = "bachelors">Bachelors Degree</option>
                    <option value = "masters">Masters Degree</option>
                    <option value = "higherLevel">Above Masters Degree</option>
                </select>
            </label>
            <br/>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default Form