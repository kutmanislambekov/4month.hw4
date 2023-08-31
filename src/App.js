import { useState } from 'react';
import './style.css'

function App() {
const [result,setResult] = useState(0)
const [input1,setInput1] = useState(0)
const [input2,setInput2] = useState(0)
function minus(){
 setResult(+input1-input2)
}
function plus(){
  setResult(+input1+(+input2))
}
function multiplication(){
  setResult(+input1*(input2))
}
function division(){
  setResult(+input1/(+input2))
}
function ee(){
  setResult((+input1)**(input2))
}


  return (
    <div className="App">
      <input type="text" className="int1" onChange={(event)=>setInput1(event.target.value)}/>
      <input type="text" className="int2"  onChange={(event)=>setInput2(event.target.value)}/>

      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
      <button onClick={multiplication}>*</button>
      <button onClick={division}>/</button>
      <button onClick={ee}>2</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;