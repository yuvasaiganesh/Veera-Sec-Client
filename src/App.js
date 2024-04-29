
import React from 'react';
import InterestForm from './components/InterestForm';
import './App.css'; 
import axios from "axios"
import { useState } from 'react';

function App() {
  const [result, setResult]= useState("Fill The Fields")
  
  const handleSubmit = async (formData) => {
    setResult("Loading...")
 
    axios.get('https://veera-sec-server.onrender.com/calculate', {
    params: {
        principal: formData.principal,
        rate: formData.rate,
        time: formData.time
    }
})
.then(response => {
    console.log(response.data);
    setResult(response.data.interest)
})
.catch(error => {
    console.error('Error:', error.response.data.error);
    setResult(error.response.data.error)
});
   
   }
      

  return (
    <div className="App">
      
        <h1>Simple Interest Calculator</h1>
        <InterestForm onSubmit={handleSubmit} output={result} />
      
    </div>
  );
}

export default App;
