import React from "react";
import "../../styles/components/volume.scss";
import { VolumePropTypes } from "./Volume.types";

function Volume({ min, max, onChange }: VolumePropTypes) {
  return (
    <div className="range">
      <input min={min} max={max} onChange={onChange} type="range" />
    </div>
  );
}

export default Volume;
