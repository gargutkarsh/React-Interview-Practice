import React , { useState } from 'react';
import './InputChips.css';


function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const InputChips = () => {

    const [ chips , setChips] = useState([]);
    const [ value, setValue ] = useState('');

    const handleEnterPress = (e) =>{
        setValue(e.target.value);
        if(e.key==='Enter'){
            setValue('');
            if(e.target.value.trim().length>0){
                setChips([...chips,{id:generateRandomString(5), value:e.target.value.trim()}]);
            }
        }
    }

    const handleChipDeletion = (id) =>{
        setChips(chips.filter((chip)=>chip.id!==id));
    }

    

  return (
    <div className='main-container'>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        className="input"
        value={value}
        onChange={handleEnterPress}
        onKeyDown={handleEnterPress}
      />
      {
        chips.length>0 ? 
        <div className="chipSection">
            {
                chips.map((chip)=>
                    <p key={chip.id} className='chipItem'>
                        <span style={{color:'#000', fontSize:'12px'}}>{chip.value}</span>
                        <span 
                            style={{width:'12px', height:'12px', color:'red'}} 
                            onClick={()=>handleChipDeletion(chip.id)}
                        >        
                            X
                        </span>
                    </p>
                )
            }
        </div> : null
      }
    </div>
  )
}

export default InputChips
