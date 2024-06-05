import Image from 'next/image'
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

export default function VideoCard() {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-10'>
      <div className='flex flex-col w-full'>
        <Image
          src="/leg.jpg" 
          alt="My leg"
          height={200}
          width={200}
          className='rounded-lg aspect-square object-cover h-full w-full mb-5'
        />
        <div className='flex justify-between items-center py-2.5'>
          <h2 className='font-bold text-[#7C0026] text-2xl'>LEG</h2>
          <MdOutlineArrowOutward className="text-primary size-10" />
        </div>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>BEGINNER</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>20</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>INTERMEDIET</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>14</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>EXPERT</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>08</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
      </div>

      <div className='flex flex-col w-full'>
        <Image
          src="/back.jpg" 
          alt="My back"
          height={200}
          width={200}
          className='rounded-lg aspect-square object-cover h-full w-full mb-5'
        />
        <div className='flex justify-between items-center py-2.5'>
          <h2 className='font-bold text-[#7C0026] text-2xl'>BACK</h2>
          <MdOutlineArrowOutward className="text-primary size-10" />
        </div>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>BEGINNER</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>20</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>INTERMEDIET</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>14</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>EXPERT</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>08</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
      </div>

      <div className='flex flex-col w-full'>
        <Image
          src="/arm.jpg" 
          alt="My arms"
          height={200}
          width={200}
          className='rounded-lg aspect-square object-cover h-full w-full mb-5'
        />
        <div className='flex justify-between items-center py-2.5'>
          <h2 className='font-bold text-[#7C0026] text-2xl'>ARMS</h2>
          <MdOutlineArrowOutward className="text-primary size-10" />
        </div>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>BEGINNER</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>20</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>INTERMEDIET</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>14</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>EXPERT</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>08</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
      </div>

      <div className='flex flex-col w-full'>
        <Image
          src="/chest.jpg" 
          alt="My chest"
          height={200}
          width={200}
          className='rounded-lg aspect-square object-cover h-full w-full mb-5'
        />
        <div className='flex justify-between items-center py-2.5'>
          <h2 className='font-bold text-[#7C0026] text-2xl'>CHEST</h2>
          <MdOutlineArrowOutward className="text-primary size-10" />
        </div>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>BEGINNER</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>20</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>INTERMEDIET</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>14</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-md'>EXPERT</h2>
            <span className='size-10 rounded-full text-center bg-primary text-white p-2 text-md'>08</span>
        </div>
        <span className='h-0.5 w-full bg-black/50 my-2'></span>
      </div>
    </div>
  )
}
