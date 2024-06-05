import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Trainer() {
  return (
    <div className='h-full py-24 w-full z-20 px-4 md:px-12 lg:px-48 relative'>
      <div className='flex flex-col justify-center items-center relative z-10'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center text-white lg:text-5xl">
          NEED A PERSONAL TRAINER?
        </h1>
        <p className='text-sm text-muted-foreground text-center max-w-sm md:max-w-md py-2'>Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem </p>
        <div className="flex w-full max-w-sm items-center space-x-2 py-5">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
      <div className='absolute inset-0'>
        <Image
          src="/trainer.png"
          alt="Background"
          height={749}
          width={1440}
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 bg-black opacity-80'></div>
      </div>
    </div>
  )
}
