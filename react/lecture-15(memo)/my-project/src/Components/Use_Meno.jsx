import React from 'react'
import { useState } from 'react'

const Use_Meno = () => {

    const [add ,setAdd] = useState()
    const [count , setCount] = useState()

  return (
    <div>
      <button  className='btn' onClick={() => setAdd(add + 1)}>Click Add</button>

      <button  className='btn' onClick={() => setCount(count+10) }>Click Count</button>
    </div>
  )
}

export default Use_Meno
