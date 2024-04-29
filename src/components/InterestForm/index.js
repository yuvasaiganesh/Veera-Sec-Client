
import React, { useState } from 'react';

import './index.css'; 

function InterestForm({ onSubmit , output}) {
  const [formData, setFormData] = useState({
    principal: "",
    rate: "",
    time: "",
  });

  
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: (value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  console.log(output)

  return (
   <div className="main-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div>
        <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/06/01152809/Simple-interest-calculator-Formula-and-calculation-FB-1200x700-compressed.jpg" alt="calculator"/>
        </div>
        <div>
        <input className="form-input" name="principal" type="number" value={formData.principal} onChange={handleChange} placeholder="Principal" />
        <input className="form-input" name="rate" type="number" value={formData.rate} onChange={handleChange} placeholder="Rate (%)" />
        <input className="form-input" name="time" type="number" value={formData.time} onChange={handleChange} placeholder="Time (years)" />
        <button className="form-button" type="submit">Calculate</button>
        </div>
      </form>
      <div className="resultSection">
        
        <h1>Simple Interest : {output}</h1>

      </div>
      </div>
   
  );
}

export default InterestForm;
