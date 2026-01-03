import React from 'react';
import './App.css';
import { tabs } from './DemoData/TabSwitcherData';
import Accordian from './Components/Accordian/Accordian';
import TabSwitcher from './Components/TabSwitcher/TabSwitcher';
import InputChips from './Components/InputChips/InputChips';

const App = () =>{
  return(
    <div style={{backgroundColor:'#F6F6F6'}}>
      <div className='container'>
        <Accordian />
        <TabSwitcher tabs={tabs} />
        <InputChips />
      </div>
    </div>
  )
}

export default App;