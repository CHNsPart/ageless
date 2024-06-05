import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { MdOutlineArrowOutward } from 'react-icons/md'

export default function Blogs() {
  return (
    <div className='h-full py-24 w-full z-20 px-4 md:px-12 lg:px-48 bg-gradient-to-b from-[#FCD6E1] to-white'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-24'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          OUR BLOGS
        </h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5'>
        <div>
          <Image
            src="/leg.jpg" 
            alt="My leg"
            height={200}
            width={200}
            className='rounded-lg aspect-video object-cover h-full w-full mb-5'
          />
          <h1 className='w-full font-bold text-[#7C0026] text-xl'>BLOGS ABOUT GYM WORKOUT EXPERIENCE</h1>
          <p className='text-sm text-[#24040E] text-left max-w-sm md:max-w-md py-2'>Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem </p>
          <Button variant={"secondary"} className='flex justify-center items-center gap-2 hover:bg-primary/20'>READ MORE <MdOutlineArrowOutward className="text-black size-4" /></Button>
        </div>

        <div>
          <Image
            src="/leg.jpg" 
            alt="My leg"
            height={200}
            width={200}
            className='rounded-lg aspect-video object-cover h-full w-full mb-5'
          />
          <h1 className='w-full font-bold text-[#7C0026] text-xl'>BLOGS ABOUT GYM WORKOUT EXPERIENCE</h1>
          <p className='text-sm text-[#24040E] text-left max-w-sm md:max-w-md py-2'>Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem </p>
          <Button variant={"secondary"} className='flex justify-center items-center gap-2 hover:bg-primary/20'>READ MORE <MdOutlineArrowOutward className="text-black size-4" /></Button>
        </div>

        <div>
          <Image
            src="/leg.jpg" 
            alt="My leg"
            height={200}
            width={200}
            className='rounded-lg aspect-video object-cover h-full w-full mb-5'
          />
          <h1 className='w-full font-bold text-[#7C0026] text-xl'>BLOGS ABOUT GYM WORKOUT EXPERIENCE</h1>
          <p className='text-sm text-[#24040E] text-left max-w-sm md:max-w-md py-2'>Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem </p>
          <Button variant={"secondary"} className='flex justify-center items-center gap-2 hover:bg-primary/20'>READ MORE <MdOutlineArrowOutward className="text-black size-4" /></Button>
        </div>
      </div>
    </div>
  )
}
