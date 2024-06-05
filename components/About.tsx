import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='h-full py-24 w-full z-20 px-4 md:px-12 lg:px-48'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          ABOUT OUR SERVICE
        </h1>
        <p className="text-sm text-muted-foreground text-center md:text-right max-w-sm md:max-w-sm">
          Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem tincidunt velit. Tristique bibendum aliquam proin non.
        </p>
      </div>
      <div className='flex justify-center mt-12'>
        <Image 
          src="/about.png" 
          alt="About Our Service"
          height={517}
          width={1083}
          className='border-2 rounded-md border-primary object-cover h-[517px] md:w-full w-[1083px]'
        />
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mt-12'>
        <p className="text-sm text-muted-foreground text-center md:text-left w-2/3">
          Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem tincidunt velit. Tristique bibendum aliquam proin non. Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem tincidunt velit. Tristique bibendum aliquam proin non.
        </p>
        <div className='h-10 w-fit md:w-1/3 bg-primary p-10 rounded-md flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold text-white'>10 YEARS</h1>
          <p className='font-bold text-[#7C0026]'>OF EXPERIENCE</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full justify-between mt-12 gap-5 md:gap-0'>
        <Image 
            src="/about-element.png" 
            alt="About Our Service"
            height={206}
            width={434}
            className='object-contain mr-12 mb-5 md:mb-0'
        />
        <div className='flex flex-col md:flex-row w-full justify-center gap-5 md:gap-0'>
            <div className='flex flex-col items-center md:items-start text-center md:text-left w-fit p-0 md:pl-12'>
                <h2 className='text-xl text-primary font-semibold h-full'>ABOUT SOME MORE <br /> EXPERIENCE</h2>
                <p className="text-sm text-muted-foreground text-center md:text-left w-2/3">
                    Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem          
                </p>
            </div>
            <div className='flex flex-col items-center md:items-start text-center md:text-left w-fit p-0 md:pl-12'>
                <h2 className='text-xl text-primary font-semibold h-full'>ABOUT SOME MORE <br /> EXPERIENCE</h2>
                <p className="text-sm text-muted-foreground text-center md:text-left w-2/3">
                    Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem          
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}
