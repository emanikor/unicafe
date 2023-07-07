import {useState} from 'react'
import './App.css';


const button =(props) =>{
  
}

const App =() =>{
// save clicks of each button to its own state 

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const [total, setTotal] = useState([0])
const [average, setAvarage] = useState([0])




// events handlings

const goodHandler =() =>{
   
    setGood(good + 1)
    setTotal(good + bad + neutral)
    setAvarage(total/3)
   

}

const neutralHandler =() =>{
  
setNeutral(neutral +1)
setTotal(good + bad + neutral)
setAvarage(total/3)
}

const badHandler =() =>{
  
  setBad(bad + 1)
  setTotal(good + bad + neutral)
  setAvarage(total/3)
}




  return (
    <div >

      <div className='title'>
<h1>Give feedBack</h1>
</div>
      
   <div className='header'>
      {/* {good} */}
      <button onClick={goodHandler} >good</button>
      {/* {neutral} */}
      <button onClick={neutralHandler} >neutral</button>
      <button onClick={badHandler} >bad</button>
      {/* {bad} */}
   
      </div>
      
      <div className='result'>
        
      <h2>Statistics</h2>
      
      
    </div>
    <div className='allresult'>
      <p>total :{total}</p>
      <p>average: {average}</p>
      </div>
     
    </div>

   
  );
}

export default App;
