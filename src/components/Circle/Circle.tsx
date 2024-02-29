import React, { useEffect, useRef } from "react";
import "../../styles/components/circle.scss";
import { useStore } from "../../store";

function Circle() {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // if (circleRef.current) {
    //   setCirclePosition(circleRef.current.getBoundingClientRect());
    // }
  }, [circleRef]);

  return <div ref={circleRef} className="circle"></div>;
}

export default Circle;
