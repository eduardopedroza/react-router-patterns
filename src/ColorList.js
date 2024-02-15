import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({ colors }) {
  if (!Array.isArray(colors)) {
    return <div>No colors available</div>;
  }

  return (
    <div className='ColorList'>
      {colors.map( color => (
        <Link key={color.id} to={`/colors/${encodeURIComponent(color.name.toLowerCase())}`}>
          {color.name}
        </Link>
      ))}
    </div>
  )
}

export default ColorList;