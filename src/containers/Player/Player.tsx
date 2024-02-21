import React from "react";
import "../../styles/containers/player.scss";
import { Menu, Audio } from "../../components";
import { useStore } from "../../store";

function Player() {
  const { selectedStation } = useStore();
  return (
    <div className="player">
      <div className="player__menu">
        <Menu station={selectedStation} />
      </div>
      <div className="player__audio">
        <Audio station={selectedStation} />
      </div>
    </div>
  );
}

export default Player;
