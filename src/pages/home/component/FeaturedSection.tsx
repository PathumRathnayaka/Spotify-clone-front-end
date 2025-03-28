import FeaturedGridSkeleton from '@/components/skeletons/FeaturedGridSkeleton'
import { useMusicStore } from '@/stores/useMusicStore'
import { P } from 'node_modules/@clerk/clerk-react/dist/useAuth-BQT424bY.d.mts'
import React from 'react'

const FeaturedSection = () => {

    const {isLoading, featuredSongs, error}= useMusicStore()

    if(isLoading) return <FeaturedGridSkeleton/>
    if(error) return <p className='text-red-500 mb-4 text-lg'>{error}</p>

  return (
    <div>FeaturedSection</div>
  )
}

export default FeaturedSection