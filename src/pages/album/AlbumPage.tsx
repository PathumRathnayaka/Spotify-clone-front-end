import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMusicStore } from '@/stores/useMusicStore';
import { console } from 'inspector';
import { Play } from 'lucide-react';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AlbumPage = () => {

    const {albumId} = useParams();
    const { fetchAlbumById, currentAlbum, isLoading} = useMusicStore()

    useEffect(() => {
        if(albumId) fetchAlbumById(albumId)
    },[fetchAlbumById, albumId])

    if(isLoading) return null
  return (
    <div className='h-full'>
        <ScrollArea className='h-full'>
            <div className=' relative min-h-full'>
                <div className='absolute inset-0 bg-gradient-to-b from-[#5038a0]/80 via-zinc-900/80 to-zinc-900 pointer-events-none' aria-hidden = 'true'>
                {/* content */}
                <div className='relative z-10'>
                    <div className='flex p-6 gap-6 pb-8'>
                        <img 
                        src={currentAlbum?.imageUrl} 
                        alt={currentAlbum?.title}
                        className='w-[240px] has-[240px] shadow-xl rounded' 
                        />
                        <div className='flex flex-col justify-end'>
                            <p className='text-sm font-medium'>Album</p>
                            <h1 className='text-7xl font-bold my-4'>{currentAlbum?.title}</h1>
                            <div className='flex items-center gap-2 text-sm text-zinc-100'>
                                <span>{currentAlbum?.song.length} songs</span>
                                <span>{currentAlbum?.releaseYear}</span>
                            </div>
                        </div>
                    </div>
                    {/* play button */}
                    <div className='px-6 pb-4 flex items-center gap-6'>
                        <Button size='icon' className='w-14 h-14 rounded-full bg-green-400 hover:scale-150 transition-all'>
                            <Play className='h-7 w-7 text-black'/>
                        </Button>
                    </div>
                    {/* table section */}
                    <div className='bg-black/20 backdrop-blur-sm'>
                    {/* table header */}
                    <div className='grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-10 py-2 text-sm text-zinc-400'>

                    </div>

                    </div>
                </div>
                </div>
            </div>
        </ScrollArea>
    </div>
  )
}

export default AlbumPage