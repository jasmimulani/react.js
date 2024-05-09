import React from 'react'
import { useSelector } from 'react-redux'

const Headre = () => {

     const reult = useSelector((state) => state.Reducer)

     console.warn("header called" ,reult);
  return (
    <div>
        <div className='h-24 bg-yellow-500 flex justify-end items-center px-20'>
            <span>{reult.length}</span>

        </div>
    </div>
  )
}

export default Headre
