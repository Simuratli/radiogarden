import React from "react";
import "../../styles/components/circle.scss";
import { useStore } from "../../store";

function Circle() {
  const { loading } = useStore();

  return (
    <div className="circle__container">
      <div className={`circle ${loading && "circle--loading"}`} />
    </div>
  );
}

export default Circle;
