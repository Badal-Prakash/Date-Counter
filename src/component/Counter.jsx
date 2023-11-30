import { useState } from "react";
import Button from 'react-bootstrap/Button';
export default function Counter() {
  const [count,setcount]=useState(0);
  const [step,setStep]=useState(1);
  const date=new Date(" 21 jan 2003");
  date.setDate(date.getDate()+count);
  return(<div className="main-container">
    <div>
    <div>
    <Button className ="button-c" variant="success" onClick={()=>setStep((c)=>c-1)}>-</Button>
    <span>
      step:{step}
    </span>
    <Button className ="button-c" variant="success" onClick={()=>setStep((c)=>c+1)}>+</Button>
    </div>
    <Button className ="button-c" variant="success" onClick={()=>setcount((c)=>c-step)}>-</Button>
    <span>
      count:{count}
    </span>
    <Button className ="button-c" variant="success" onClick={()=>setcount((c)=>c+step)}>+</Button>{' '}
    </div>
   
    <div>
    <p>
      <span>
        {count===0?"Today is ":count>0?`${count} days from Today `:`${Math.abs(count)} days before Today `}
      </span>
      <span>{date.toDateString()}</span></p>
    </div>
   
  </div>)
 
}
