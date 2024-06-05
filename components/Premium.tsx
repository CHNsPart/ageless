import React from 'react'
import { PiSealCheckFill } from "react-icons/pi";
import { Button } from './ui/button';
import Image from 'next/image';

export default function Premium() {
  return (
    <div className='h-full py-24 w-full z-20 px-4 md:px-12 lg:px-48 relative'>
      <div className='flex flex-col justify-center items-center mb-24 relative z-10'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          UPGRADE TO PREMIUM
        </h1>
        <p className='text-sm text-muted-foreground text-center max-w-sm md:max-w-md py-2'>Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem </p>
        <h1 className='text-6xl text-primary font-bold pt-8 pb-5'>20$ <span className='text-sm font-bold'>/MONTH</span></h1>
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight text-center lg:text-4xl py-5">
          SERVICES YOU WILL GET
        </h1>
        <div>
          <span className='flex justify-start items-center gap-2 w-full'><PiSealCheckFill className='text-primary size-6'/>PREMIUM SERVICE PREMIUM I</span>
          <span className='flex justify-start items-center gap-2 w-full'><PiSealCheckFill className='text-primary size-6'/>PREMIUM SERVICE PREMIUM II</span>
          <span className='flex justify-start items-center gap-2 w-full'><PiSealCheckFill className='text-primary size-6'/>PREMIUM SERVICE PREMIUM III</span>
          <span className='flex justify-start items-center gap-2 w-full'><PiSealCheckFill className='text-primary size-6'/>PREMIUM SERVICE PREMIUM IV</span>
          <span className='flex justify-start items-center gap-2 w-full'><PiSealCheckFill className='text-primary size-6'/>PREMIUM SERVICE PREMIUM V</span>
        </div>
        <Button className='mt-10' variant={"cta"}>SUBSCRIBE NOW</Button>
      </div>
      <div className='absolute inset-0'>
        <Image
          src="/premium-pattern.png"
          alt="Background"
          height={749}
          width={1440}
          className='object-cover w-full h-full'
        />
        {/* <div className='absolute inset-0 bg-black opacity-50'></div> */}
      </div>
    </div>
  )
}