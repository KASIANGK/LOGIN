import { useState } from 'react'
// import Compteur from './Components/Compteur/Compteur'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import { increment, incrementByAmount } from './App/features/CounterSlice'
// import { decrement } from './App/features/CounterSlice'
import Login from './Components/Login'



function App() {

  const count = useSelector((reducer) => reducer.counter.value)
  const dispatch = useDispatch()
// const [amount, setAmount] = useState(5)

  const routeur = createBrowserRouter([
    {
      path: '/login',
      element: <Login></Login>
    }
  ])

  return (
    <div>
      {/* <h1>hey {count}</h1>
      <div className='aaLign'>
        <button onClick={()=>{dispatch(increment())}}>+ 1</button>
        <button onClick={()=>{dispatch(decrement())}}>- 1</button>
        <button onClick={()=>{dispatch(incrementByAmount(amount))}}>+ {amount}</button>
        <input type='number' value={amount} onChange={((e)=>setAmount(parseInt(e.target.value)))}></input>

      </div> */}
        <RouterProvider router={routeur}></RouterProvider>
    </div>
  )
}

export default App
