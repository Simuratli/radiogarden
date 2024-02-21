import React, { ChangeEvent, useRef, useState } from "react";
import "../../styles/components/audio.scss";
import { PlayButton, NextPrev, Volume } from "../../components";
function Audio() {
  const audioRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
      <div className="audio__content">
        <h1>Listen.moe</h1>
        <p>Japan</p>
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
        {/* <input
          value={volume}
          onChange={handleChangeVolume}
          type="range"
        /> */}
        <Volume min={0} max={100} onChange={handleChangeVolume} />
        <audio ref={audioRef} autoPlay>
          <source
            src={
              "https://radio.garden/api/ara/content/listen/VBZNZCLB/channel.mp3?r=1&1708426717009"
            }
            type="audio/mpeg"
          />
        </audio>
      </div>
    </div>
  );
}

export default Audio;
