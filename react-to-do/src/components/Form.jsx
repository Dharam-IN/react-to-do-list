import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";

const Form = () => {
    const [value, setValue] = useState('');
    const [listData, setListdata] = useState([]);

    const handleSubmit = () => {
        setListdata([...listData, value]);
        setValue('');
    }

    const removeItem = (index) => {
        const updatedList = listData.filter((item, i) => i !== index);
        setListdata(updatedList);
    }

    return (
        <div className='mx-auto w-[350px]'>
            <div className='flex'>
              <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='outline-none border border-gray-500 rounded-xl text-white me-3 p-4 bg-transparent w-[70%] placeholder:text-gray-300' placeholder='What task have you today?' />
              <button className='w-[30%] bg-gray-700 border-none p-2 text-white cursor-pointer rounded-md' onClick={handleSubmit}>Add Task</button>
            </div>
            <p className='text-white text-start text-xl mt-5 mb-3'>Here is your list</p>
            {listData.length > 0 && listData.map((data, i) => (
                <div key={i} className='text-white bg-lime-600 p-4 mb-2 flex justify-between items-center'>
                    <p className='capitalize font-semibold text-3xl'>{data}</p>
                    <i className='text-xl cursor-pointer hover:text-orange-600 text-3xl' onClick={() => removeItem(i)}>
                        <MdDelete />
                    </i>
                </div>
            ))}
        </div>
    );
}

export default Form;
