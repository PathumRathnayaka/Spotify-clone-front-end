import { usePlayStore } from '@/stores/usePlayerStore';
import React, { useEffect, useRef } from 'react'

const AudioPlayer = () => {

    const audioRef =useRef<HTMLAudioElement>(null);
    const prevSongRef = useRef<string | null>(null);

    const { currentSong, isPlaying} = usePlayStore();

    useEffect(() => {
        if(isPlaying) audioRef.current?.play();
        else audioRef.current?.pause();
    },[isPlaying])

  return <audio ref={audioRef}/>
}

export default AudioPlayer