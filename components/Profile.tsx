import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

export default function Profile() {
  const images = [
    "/slide-1.png",
    "/slide-2.png",
    "/slide-3.png",
    "/slide-4.jpg",
    "/slide-5.jpeg",
    "/slide-6.jpeg",
    "/slide-7.jpeg",
  ];

  return (
    <div className='h-full py-24 w-full z-20 px-4 md:px-12 lg:px-48 relative'>
      <div className='absolute inset-0'>
        <Image
          src="/profie-pattern.png"
          alt="Background"
          height={671}
          width={1440}
          className='object-cover w-full h-full'
        />
        {/* <div className='absolute inset-0 bg-black opacity-50'></div> */}
      </div>
      <div className='relative flex flex-col md:flex-row justify-end items-center'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          PROFILE
        </h1>
      </div>
      <Carousel className="w-full mt-12 relative z-10">
        <CarouselContent className="-ml-1">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Image src={image} alt={`Image ${index + 1}`} height={500} width={500} quality={100} priority className="object-cover w-full h-full rounded-md" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='text-primary border-primary' />
        <CarouselNext className='text-primary border-primary' />
      </Carousel>
    </div>
  );
}
