import React from 'react'
import { FaUser } from "react-icons/fa";






const Navbar = () => {
  return (
    <div>
         <div className='bg-white shadow-md'>
            <div className='container flex justify-between py-4 sm:py-3'>
            <div className='font-bold text-5xl'>Logo</div>
            
            <div>
                <ul className='font-semibold flex items-center gap-10 '>
                  
                <li className='hover:text-primary text-xl bg-pink-300 rounded-lg w-auto py-1 px-3'>Home</li>
                <li className='hover:text-primary text-xl '>About</li>
                <li className='hover:text-primary text-xl '>Contact</li>

                <li>
                    <button className='flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'>
                    <FaUser />
                      My Account
                    </button>
                </li>
                </ul>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Navbar
