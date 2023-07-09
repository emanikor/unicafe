import {useState} from 'react'
import './App.css';


const Statistics = (props) =>{
  if (props.allClicks.length === 0){
    return(
      <div>no feed back given </div>
    )
  }
  return(
    <div>      button press feedback: {props.allClicks.join(' ')}    </div>
  )
} 




const App =() =>{
// save clicks of each button to its own state 

const[good, setGood] = useState(0)
const[neutral , setNeutral] = useState(0)
const[bad, setBad] = useState(0)
const[allClicks , setAll] = useState([])
const [total, setTotal] = useState(0)
const[average, setAverage] = useState(0)



// events handlings
const handleGoodClick = () =>{
   
   setAll(allClicks.concat('G'))
   const updatedGood= good + 1
   setGood(updatedGood)
  
   setTotal(updatedGood + bad + neutral)
   setAverage(total/3)

}


const handleNeutralClick = () =>{
 
  setAll(allClicks.concat('N'))
  const updatedNeutral= neutral + 1
  setNeutral(updatedNeutral)
 
  setTotal(updatedNeutral + good + bad)
  setAverage(total/3)
}


const handleBadClick= () =>{

  setAll(allClicks.concat('B'))
  const updatedBad = bad + 1
  setBad(updatedBad)
  setTotal(updatedBad + good + neutral)
  setAverage(total/3)
}


  return (
    <div >

      <div className='title'>
<h1>Give feedBack</h1>
</div>
      
   <div className='header'>
   
     <button onClick={handleGoodClick} text='good'> good</button>
     
     <button onClick={handleNeutralClick} text ='neutral'> neutral</button>
    
     <button onClick={handleBadClick} text = 'bad'>bad</button>
   

   
   
      </div>
      
      {/* <p>{allClicks.join(console.log(''))}</p> */}
      <div className='result'>
        
      <h2>Statistics</h2>
      
      
    </div>
    <div className='allresult'>

    <Statistics allClicks={allClicks}/>
    
      <p>good {good}</p>
      <p> neutral {neutral}</p>
      <p>bad   {bad} </p>
     <p>total : { total}</p>
     <p>Average : {average}</p>
      </div>
    
    </div>

   
  );
}

export default App;
