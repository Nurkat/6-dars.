import { Metadata } from 'next'
import React from 'react'




export const metadata: Metadata ={
  title:"About page"
}
const page = () => {
  return (
    <div className='w-full px-3 mx-auto'>
      <div className="flex items-center justify-between">
        <div className="">
          <h2 className='text-[50px] font-bold text-white px-5'>About</h2>
        </div>
        <div className="flex flex-col justify-between w-[500px] my-[25px]">
          <span className='w-[50px] h-[2px] bg-[#79C8C7]'></span>
          <p className='text-white font-semibold text-[18px] pt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio velit laboriosam blanditiis iure, nulla reprehenderit at deserunt cum omnis rerum fuga repellendus voluptatem commodi dicta eveniet praesentium? Possimus, hic suscipit!</p>
        </div>
      </div>
    </div>
  )
}

export default page
