import Image from 'next/image'
import React from 'react'

export default function Journey() {
  return (
    <div className='h-full py-24 w-full z-20 px-4 md:px-12 lg:px-48 relative'>
      <div className='absolute inset-0'>
        <Image
          src="/journey-pattern.png"
          alt="Background"
          height={671}
          width={1440}
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 bg-primary/30 opacity-50'></div>
      </div>
      <div className='relative flex flex-col md:flex-row justify-between items-center'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          ABOUT OUR SERVICE
        </h1>
        <p className="text-sm text-muted-foreground text-center md:text-right max-w-sm md:max-w-sm">
          Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem tincidunt velit. Tristique bibendum aliquam proin non.
        </p>
      </div>
      <div className='flex justify-center mt-12 relative w-full'>
        <Image 
          src="/journey.png" 
          alt="My Journey"
          height={342}
          width={730}
          className='border-2 rounded-lg border-primary object-cover h-full w-full'
        />
      </div>
    </div>
  )
}
