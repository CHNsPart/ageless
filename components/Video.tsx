import React from 'react'
import VideoCard from './VideoCard'

export default function Video() {
  return (
    <div className='h-full py-24 w-full z-20 px-4 md:px-12 lg:px-48'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-24'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          OUR VIDEO BUNDLES
        </h1>
      </div>
      <VideoCard/>
    </div>
  )
}
