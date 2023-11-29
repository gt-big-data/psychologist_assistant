import React, {useState, useEffect} from 'react'

function Form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [ethnicity, setEthnicity] = useState("");
    const [vetStatus, setVetStatus] = useState("");
    const [history, setHistory] = useState("");
    const [education, setEducation] = useState("");

    const [submitStatus, setSubmitStatus] = useState({ status: '', message: '' });
    const[data, setData] = useState([]);
    
    const formFieldsOrder = ["name", "age", "ethnicity", "vetStatus", "history", "education"];


    const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:8000/processed_data'); 
        const result = await response.json();
        console.log('Fetched data:', result);
        setData(result);  
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };

    const handleSubmit = async (e) => {
        // When a form is submitted, the browser typically performs a default action, which is to send a request to the server and reload the page.
        // This line prevents that.
        e.preventDefault();
    
        const form_data = { name, age, ethnicity, vetStatus, history, education };
    
        // Sends a post request to /submit
        try {
          const response = await fetch('http://localhost:8000/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form_data),
          });
    
          if (response.ok) {
            setSubmitStatus({ status: 'success', message: 'Form submitted successfully!' });
            fetchData();
          } else {
            setSubmitStatus({ status: 'error', message: 'Error submitting form.' });
          }
        } catch (error) {
          console.error('An unexpected error occurred:', error);
          setSubmitStatus({ status: 'error', message: 'Unexpected error occurred.' });
        }
      };
    
    return (
    <div>
        {/* When the form is submitted, handleSubmit is ran. */}
        <form onSubmit={handleSubmit}>
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
                    value = {ethnicity}
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
        <input type="submit" value="Submit" />
        {submitStatus.status && (
            <div>
            <p>{submitStatus.message}</p>
            </div>
        )}
        </form>


        {submitStatus.status === 'success' && (
        <div>
          <h2>Results:</h2>
          {formFieldsOrder.map((field) => (
            <div key={field}>
              <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {data[field]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
    
    export default Form;