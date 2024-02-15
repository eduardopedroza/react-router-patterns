import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios'
import { v4 as uuid } from "uuid";

import './App.css';
import MyRoutes from './MyRoutes';

function App() {
  const defaultColors = [
    { id: 1, name: "Red", color: "#FF0000" },
    { id: 2, name: "Green", color: "#00FF00" },
    { id: 3, name: "Blue", color: "#0000FF" },
  ];

  const [colors, setColors] = useState(defaultColors);

  const addColor = color => {
    let newColor = { ...color, id: uuid()};
    setColors(colors => [...colors, newColor])
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className='header'>
          <h1>WELCOME TO THE COLOR FACTORY</h1>
          <Link to='/colors/new'>Add a color</Link>
        </div>
        <div className='colors'>
          <MyRoutes colors={colors} addColor={addColor}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
