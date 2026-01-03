import React from 'react';
import './App.css';
import { tabs } from './DemoData/TabSwitcherData';
import Accordian from './Components/Accordian/Accordian';
import TabSwitcher from './Components/TabSwitcher/TabSwitcher';

const App = () =>{
  return(
    <div style={{backgroundColor:'#F6F6F6'}}>
      <div className='container'>
        <Accordian />
        <TabSwitcher tabs={tabs} />
      </div>
    </div>
  )
}

export default App;