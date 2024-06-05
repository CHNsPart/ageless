import React from 'react';
import { Button } from './ui/button';
import Marquee from './Marquee';

export default function Hero() {
  return (
    <section className="h-full w-full mb-16 overflow-hidden">
      <div className="hero-background absolute top-0 z-10 inset-0 h-full w-full bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute top-0 inset-0 z-10 bg-black/50"></div>
      
      <div className="relative h-[80vh] z-20 text-secondary mx-4 md:mx-24 lg:mx-48 flex flex-col gap-5 justify-center items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          WORK WITH <br /> PROFESSIONALS
        </h1>
        <p className="text-sm text-muted-foreground text-center max-w-sm">
          Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem tincidunt velit. Tristique bibendum aliquam proin non.
        </p>
        <div className='flex gap-2'>
          <Button variant={"cta"}>REGISTER NOW</Button>
          <Button variant={"secondary"}>BROWSE VIDEOS</Button>
        </div>
      </div>
      <Marquee />
    </section>
  );
}
