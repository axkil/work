import { useEffect, useState } from "react"

const Test = () => {
    const[count,setCount]=useState(0)
    const Handleclick = () =>{
        setCount(count+2)
        
    }
    const Handleclik = () => {
        setCount(count-2)
        
    }
    useEffect(()=>{
            
        console.log(count)
            
    },[])
  return (
    <div>
      <button className="bg-sky-500 pl-3 pr-3 w-fit rounded flex justify-center shadow-2xl hover:bg-sky-600" onClick={Handleclick}>inc2</button>
      <h1>{count}</h1>
      <button className="bg-sky-500 pl-3 pr-3 w-fit rounded flex justify-center shadow-2xl hover:bg-sky-600" onClick={Handleclik}>dec2</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Test