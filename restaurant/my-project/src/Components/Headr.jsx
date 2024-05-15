import React from 'react'

const Headr = () => {
    return (
        <div className=' relative z-[-1]'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
                    <div className='space-y-7 text-dark order-2 sm:order-1'>
                        <h1 className='text-4xl'>Fresh & Healthy Meal Plan <span className='text-secondary font-cursive text-7xl'>Delivery
                        </span> in Miami</h1>
                        <p className='lg:pr-64'>
                            Delicious Meals Delivered to your Door From $132.95 per week
                        </p>
                       <div>
                        <button></button>
                       </div>
                    </div>
                    <div className='order-1 sm:order-2'>
                        <img src="https://restaurant-tcj.netlify.app/assets/hero-BCogpiE1.png" alt="" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Headr
