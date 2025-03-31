import { Song } from '@/types';
import React from 'react'
import SectionGridSkeleton from './SectionGridSkeleton';
import { Button } from '@/components/ui/button';

type SectionGridProps = {
  title: string;
  songs: Song[];
  isLoading: boolean;
}

const SectionGrid = ({ songs, title, isLoading}:SectionGridProps) => {
  if(isLoading) return <SectionGridSkeleton/>;
  console.log(title,songs)
  return (
    <div className='mb-8'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl sm:text-2xl font-bold'>{title}</h2>
        <Button variant='link' className='text-sm text-zinc-400 hover:text-white'>
          show all
        </Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {songs.map((songs) => (
          <div key={songs._id} 
          className='bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/40 transition-all group cursor-pointer'>
            <div className='relative mb-4'>
              <div className='aspect-square rounded-md shadow-lg overflow-hidden'>
                <img src={songs.imageUrl} alt={songs.title} 
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'/>
              </div>
            </div>
            <h3 className='font-medium mb-2 truncate'>
              {songs.title}
            </h3>
            <p className='text-sm text-zinc-400 truncate'>
              {songs.artist}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionGrid