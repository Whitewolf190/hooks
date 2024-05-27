import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [name,settitleName] =useState('yash')
    const [count,setCount]=useState(0)
    
    const  increment=()=>{
        settitleName(document.title='yash kale')
        setCount(prevCount=>prevCount+1)
    }
    const  decrement=()=>{
        setCount(prevCount=>prevCount-1)
    }

    useEffect(()=>{
      document.title=name + count
      return()=>{
        console.log('Counter component unmounted');
      }
    },[count,name])

  return (
    <>
    <h1 className='text-center mt-5 mb-5'> Counter Component</h1>
    <div className='d-flex  justify-content-center'>
     
      <button className='px-4 rounded btn btn-danger text-white' onClick={decrement}>-</button>
      <div style={{'fontSize':'30px','color':'blue','margin':'10px'}} >{count}</div>
      <button className='px-4 p-1 rounded btn btn-primary' onClick={increment}>+</button>
      
      
    </div>
    </>
  )
}

export default Counter
