import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../../animations/load.json";

export default function Loading() {
  return (
    <div className="load">
      <Lottie loop animationData={animationData} play  className="load--animations" />
    </div>
  );
}
