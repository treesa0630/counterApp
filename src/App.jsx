import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { changeRange, decrement, increment, reset } from './redux/counterSlice'
import { useState } from 'react'

function App() {

  const[range, setRange] = useState("")
  console.log(range);
  

  const count = useSelector((state)=>state.counter.value)
  console.log(count);
  
  const dispatch = useDispatch() // used to call action


  return (
    <>
      <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='border rounded -5 p-5 bg-light'>
          <h2 className='heading text-primary bg-light'>Counter Application</h2>
          <h1 className='number text-primary bg-light text-center mt-5 pt-4'>{count}</h1>

          <div className='d-flex justify-content-evenly bg-light mt-5'>
            <button className='btn btn-warning mx-1' onClick={() => dispatch(decrement())}>DECREMENT</button>
            <button className='btn btn-danger mx-1' onClick={() => dispatch(reset())}>RESET</button>
            <button className='btn btn-success mx-1' onClick={() => dispatch(increment())}>INCREMENT</button>
          </div>

          <div className='d-flex bg-light my-5'>
            <input placeholder='RANGE' type="text" onChange={(e)=>setRange(e.target.value)} className='bg-light form-control' />
            <button className='btn btn-primary ms-3' onClick={()=>dispatch(changeRange(Number(range)))} >CLICK</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
