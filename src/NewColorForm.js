import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NewColorForm({ addColor }) {
  const INITIAL_STATE = { name: '', color: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleSubmit= evt => {
    evt.preventDefault();
    addColor(formData);
    setFormData(INITIAL_STATE);
    navigate('/colors');
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData( data => ({
      ...data,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange} 
      />
      <label htmlFor='color'>Color:</label>
      <input
        type='color'
        name='color'
        value={formData.color}
        onChange={handleChange} 
      />
      <button>Add new Color</button>
    </form>
  )
}

export default NewColorForm;