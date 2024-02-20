import React, { ChangeEvent, useRef, useState } from "react";
import "../../styles/components/audio.scss";
import { PlayButton } from "../../components";
function Audio() {
  const audioRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(100);

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
      <PlayButton
        play={isPlaying}
        onClick={() => {
          setIsPlaying((prev) => !prev);
          handlePlay();
        }}
      />
      <input
        value={volume}
        onChange={handleChangeVolume}
        type="range"
        min={0}
        max={100}
      />
      <audio ref={audioRef}>
        <source
          src={
            "https://radio.garden/api/ara/content/listen/VBZNZCLB/channel.mp3?r=1&1708426717009"
          }
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default Audio;
