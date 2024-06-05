import React from 'react';
import Card from './Card';

export default function Choose() {
  return (
    <div className="h-full pt-48 md:pt-60 w-full z-20 px-4 md:px-12 lg:px-48">
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          WHY CHOOSE US
        </h1>
        <p className="text-sm text-muted-foreground text-center md:text-right max-w-sm md:max-w-sm">
          Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat. Ipsum semper parturient hac ultrices cursus lorem tincidunt velit. Tristique bibendum aliquam proin non.
        </p>
      </div>
      <div className='w-full flex flex-wrap justify-center py-24'>
        <Card />
        {/* Add more Card components as needed */}
      </div>
    </div>
  );
}
