import React from "react";
import "../../styles/containers/player.scss";

import { Menu, Audio } from "../../components";

function Player() {
  return (
    <div className="player">
      <div className="player__menu">
        <Menu />
      </div>
      <div className="player__audio">
        <Audio />
      </div>
    </div>
  );
}

export default Player;
