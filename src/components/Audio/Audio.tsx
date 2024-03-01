import React, { ChangeEvent, useRef, useState,useEffect } from "react";
import "../../styles/components/audio.scss";
import { PlayButton, NextPrev, Volume } from "../../components";
import {AudioPropTypes} from './Audio.types'
function Audio({station}:AudioPropTypes) {


  useEffect(() => {
    if(station){
      setIsPlaying(false)
      setUpdate(true)
      setTimeout(() => {
        setUpdate(false)
      }, 100);
    }else{
      setUpdate(true)
    }
  }, [station])
  

  const audioRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(100);
  const [update, setUpdate] = useState(false)

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleChangeVolume = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(event.target.value) / 100;
      setVolume(Number(event.target.value));
    }
  };

  return (
    <div className="audio">
      <div className="audio__content">
        <h1>{station ? station.name : "Select station"}</h1>
        <p>{station ? station.country : "-"}</p>
      </div>
      <div className="audio__actions">
        <div className="audio__buttons">
          <NextPrev next={false} />
          <PlayButton
            play={isPlaying}
            onClick={() => {
              setIsPlaying((prev) => !prev);
              handlePlay();
            }}
          />
          <NextPrev next />
        </div>
        <Volume value={volume} min={0} max={100} onChange={handleChangeVolume} />
        {
          !update && <audio ref={audioRef} autoPlay>
          <source
            src={station ? station.url : "https://radio.garden/api/ara/content/listen/VBZNZCLB/channel.mp3?r=1&1708426717009"}
            type="audio/mpeg"
          />
        </audio>
        }
        
      </div>
    </div>
  );
}

export default Audio;
