import  { useState , useMemo } from 'react'

const UseMemoEx = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const calculate =useMemo(()=>{
        return number*number 
    },[number]);


  return (
    <div>
      <h1>{number}</h1>       
       <h1>{calculate}</h1>
        <button onClick={()=>setNumber(number+1 )}>click</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1 )}>click</button>

  

    </div>
  )
}

export default UseMemoEx
