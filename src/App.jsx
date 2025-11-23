import React from 'react';
import './App.css'
import Accordian from './Components/Accordian/Accordian';

const App = () =>{
  return(
    <div style={{backgroundColor:'#F6F6F6'}}>
      <div className='container'>
        <Accordian />
      </div>
    </div>
  )
}

export default App;