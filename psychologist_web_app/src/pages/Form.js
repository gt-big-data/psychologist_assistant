import React, {useState} from 'react'

function Form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [ethinicity, setEthnicity] = useState("");
    const [vetStatus, setVetStatus] = useState("");
    const [history, setHistory] = useState("");
    const [education, setEducation] = useState("");
  
    return (
        <form>
            <label>Enter your name: 
                <input 
                    type="text"
                    value = {name}
                    onChange = {e => setName(e.target.value)}
                />
            </label>
            <br/>
            <label>Enter your age: 
                <input 
                    type="text"
                    value = {age}
                    onChange = {e => setAge(e.target.value)}
                    />
            </label>
            <br/>
            <label>Enter your Ethnicity: 
                <input 
                    type="text"
                    value = {ethinicity}
                    onChange = {e => setEthnicity(e.target.value)}
                />
            </label>
            <br/>
            <label>Veteran Status: 
                <select 
                    name = "vetStatus"
                    value = {vetStatus}
                    onChange = {e => setVetStatus(e.target.value)}
                >
                    <option value = "active">Active</option>
                    <option value = "retired">Retired</option>
                    <option value = "notVet">Not a Veteran</option>
                </select>
            </label>
            <br/>
            <label>Please describe your history with substance use:
                <input 
                    type="text"
                    value = {history}
                    onChange = {e => setHistory(e.target.value)}
                />
            </label>
            <br/>
            <label>Education: 
                <select 
                    name = "edu"
                    value = {education}
                    onChange = {e => setEducation(e.target.value)}
                >
                <option value = "lowerLever">Less than High School</option>
                    <option value = "highSchool">High School</option>
                    <option value = "someCollege">Some College</option>
                    <option value = "bachelors">Bachelors Degree</option>
                    <option value = "masters">Masters Degree</option>
                    <option value = "higherLevel">Above Masters Degree</option>
                </select>
            </label>
            <br/>
            <input 
                type="submit" 
                value="Submit"
                onSubmit={async () => {
                    const form_data = {name, age, ethinicity, vetStatus, history, education}
                    const response = await fetch("http://localhost:8000/submit", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(form_data)
                    });

                    if (response.ok) {
                        console.log("response worked!");
                    }
                }}
            ></input>
        </form>
    )
}

export default Form