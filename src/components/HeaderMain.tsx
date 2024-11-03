import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'

const HeaderMain = () => {
  return (
    <div className='border-b border-gray-600 py-6'>
        <div className='cursor-pointer container sm:flex justify-between items-center'>
        <div className='font-bold text-4xl text-center pb-5 sm:pb-0 text-blackish'>
            MA-MOBILE
        </div>
        <div className='w-full sm:w-[300px] md:w-[70%] relative'>
            <input 
            className='border-gray-200 border p-2 px- rounder-lg w-full'
            type='text'
            placeholder='Enter any product Name....'/>
            <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400'/>
        </div>
        <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
            <BiUser />
            <div className='relative'>
                <FiHeart />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[17px] h-[18px] text-[12px] text-white grid place-items-center trasnlate-x-1 -translate-y-1'>
               15
            </div>
            </div>
            <div className='relative'>
                <HiOutlineShoppingBag />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[17px] h-[18px] text-[12px] text-white grid place-items-center trasnlate-x-1 -translate-y-1'>
              11 
            </div>
            </div>
        </div>
        </div>


    </div>
  )
}

export default HeaderMain