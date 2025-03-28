import TopBar from '@/components/TopBar'
import React, { useEffect } from 'react'
import { useMusicStore } from "@/stores/useMusicStore";
import FeaturedSection from './component/FeaturedSection';

const HomePage = () => {
  const {
		fetchFeaturedSongs,
		fetchMadeForYouSongs,
		fetchTrendingSongs,
		isLoading,
		madeForYouSongs,
		featuredSongs,
		trendingSongs,
	} = useMusicStore();
  

  useEffect(() => {
		fetchFeaturedSongs();
		fetchMadeForYouSongs();
		fetchTrendingSongs();
	}, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);


  return (
    <div className='rounded-md overflow-hidden'>
      <TopBar/>
      <FeaturedSection/>
    </div>
  )
}

export default HomePage