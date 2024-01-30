import React, { useState } from 'react'

const Form = () => {

    const [value, setValue] = useState('')

  return (
    <div>
        <form className='mb-4 w-full font-primary text-center'>
            <input type="text" onChange={(e)=>console.log(e.target.value)} className='outline-none border border-gray-500 rounded-xl text-white me-3 p-4 bg-transparent w-[300px] placeholder:text-gray-300' placeholder='What task have you today?'/>
            <button type='button' className='bg-gray-700 border-none p-2 text-white cursor-pointer rounded-md'>Add Task</button>
        </form>
    </div>
  )
}

export default Form