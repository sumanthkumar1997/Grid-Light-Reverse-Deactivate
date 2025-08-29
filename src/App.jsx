import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const config = [ 
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ];

  const [activeCells, setActiveCells] = useState([]);

  const Cell = ({key}) => {

    return(<div
      key={key}
      className={`cell ${activeCells.includes(key) ? 'cell-active' : ''}`}
      onClick={()=>{setActiveCells([...activeCells, key])}}>

    </div>);

  }

  return (
    <>
    <div className='grid'>
      {config.flat(1).map((item, index)=>(
         (item === 1) ? 
        (<Cell key={index} />)
        : (<span/>) 
      ))}

    </div>
      
    </>
  )
}



export default App
