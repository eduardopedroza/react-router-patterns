import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

function ColorDetails({ colors }) {
  const { name } = useParams();

  const color = colors.find(color => color.name.toLowerCase() === name.toLowerCase());

  if (!color || !color.name) return <Navigate to='/colors'/>

  return (
    <div 
      className='ColorDetails'
      style={{backgroundColor: color.color }}
    >
      <h2>This is {color.name}</h2>
      <h2>Isn't it beautiful?</h2>
      <Link to='/colors'>Go Back</Link>
    </div>
  )
}

export default ColorDetails;
