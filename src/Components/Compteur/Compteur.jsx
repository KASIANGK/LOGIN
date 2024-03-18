import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case 'DECREMENT' :
            return {count: state.count + 1}
        case 'INCREMENT' :
            return {count : state.count -1}
        default :
        return state
    }
  }

const initialState = { count: 0 }

export default function Compteur() {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }


  return (
    <div>
      <h1>Compteur: {state.count}</h1>
      <button onClick={increment}>- 1</button>
      <button onClick={decrement}>+ 1</button>
    </div>
  )
}
