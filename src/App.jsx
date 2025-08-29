import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const config = [ 
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ];

  const [activeCells, setActiveCells] = useState([]);
  const [deactivateEnabled, setDeactivateEnabled] = useState(false);

  useEffect(()=>{
    if( (activeCells.length === config.flat(1).filter(item=>item===1).length) || deactivateEnabled ){
      setDeactivateEnabled(true);
     enableReverseCellDeactivate();
     console.log("Completed");
    }

  }, [activeCells]);

  const Cell = ({onClick, filled}) => {

    return(<div
      type="button"
      className={`cell ${filled ? "cell-active " : ""}`}
      onClick={onClick}>

    </div>);

  }

  const enableReverseCellDeactivate = () => {

    const interval = setTimeout(()=>{
      setActiveCells(prev => {
  if (prev.length === 0) {
    setDeactivateEnabled(false);
    clearTimeout(interval);
    return [];
  }
  return prev.slice(0, -1); // remove last element
});
    }, 500);

  }

  const handleCellClick = (index) => {
    if(activeCells.includes(index)) return;

    setActiveCells([...activeCells, index])
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
            handleCellClick(index) }}
           
          filled={activeCells.includes(index)}
          
           />)
        : (<span key={index} />)
      ))}

    </div>
      
    </>
  )
}



export default App
