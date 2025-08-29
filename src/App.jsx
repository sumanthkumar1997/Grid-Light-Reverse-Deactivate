import { useState } from 'react'
import './App.css'

function App() {
  const config = [ 
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ];

  const [activeCells, setActiveCells] = useState([]);

  const Cell = ({onClick, filled}) => {

    return(<div
      type="button"
      className={`cell ${filled ? "cell-active " : ""}`}
      onClick={onClick}>

    </div>);

  }

  return (
    <>
    <div className='grid'>
      {config.flat(1).map((item, index)=>(
         (item === 1) ? 
        (<Cell
          key={index}
          onClick={()=>{
            console.log('clicked', index);
            console.log('activeCells', activeCells);
            setActiveCells([...activeCells, index])}}
          filled={activeCells.includes(index)}
          
           />)
        : (<span key={index} />)
      ))}

    </div>
      
    </>
  )
}



export default App
