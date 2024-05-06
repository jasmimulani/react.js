import React from 'react'
import {  useSelector, useDispatch} from 'react-redux'
import { buy_cake } from '../Redux'


const NewContainer = () => {


 const numOfCake = useSelector(state => state.numOfCake)


  const dispatch = useDispatch()


  return (
    <div>
        <h1> number of cake:{numOfCake}</h1>
        <button onClick={() => dispatch(buy_cake())}>Increment</button>
    </div>
  )
}

export default NewContainer
