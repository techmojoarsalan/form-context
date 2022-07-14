import React , {useContext} from 'react'
import { CounterContext } from './Context'

function GrandChild() {
    const  { counter} = useContext(CounterContext)
  return (
    <div>
        <h2>GrandChild</h2>
        <h4>{counter}</h4>
        

    </div>
  )
}

export default GrandChild