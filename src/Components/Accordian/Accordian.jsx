import React, { useState } from 'react';
import { AccordianData } from './DemoData';
import './Accordian.css';

const Accordian = () =>{
    const [ activeInd, setActiveInd ] = useState(null);

    const handleActiveInd = (clickedInd) => {
        if(activeInd === clickedInd){
            setActiveInd(null);
        }
        else{
            setActiveInd(clickedInd);
        }
        
    }

    return(
        <div className='accordianWrapper'>
            {
                AccordianData.map((item, ind)=>
                    <div className="accordianItem" onClick={()=>handleActiveInd(ind)}>
                        <p className="accordianTitle">{item.title}</p>
                        { activeInd===ind ? <p className='accordianContent'>
                            {item.content}
                        </p> : null}
                    </div>
                )
            }
        </div>
    )
}

export default Accordian;