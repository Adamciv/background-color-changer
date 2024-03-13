import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const buttonStyle = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'space-around',
  justifyItems:'center'

}

function App() {

  const colors = ['lightgreen', 'red', 'yellow', 'lightblue']
  const [color, setColor] = useState('pink')
  const buttons = colors.map(color => <button style={{ backgroundColor: color }} onClick={() => changecolor(color)} >{color}</button>);



  const changecolor = (newcolor) => { setColor(newcolor) }

  const divstyle = {
    backgroundColor: color,
    height: '100vh'
  
  }

  return (
    <div style={divstyle} className="App">
      <h2 >
        Click on a button to change the color of the background 
      </h2>
      <div>{buttons}</div>
    </div>
  );
}

export default App;
