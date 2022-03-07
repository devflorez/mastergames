/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Button } from "semantic-ui-react";
import { Icon } from "@iconify/react";
export default function Hero() {
  return (
    <div className="hero">
      <img src="/assets/warzone2.jpg" alt="warzone2" />
      <div className="hero--info">
        <h2>Call Of Duty: Warzone</h2>
        <p>
          A standalone free-to-play battle royale and modes accessible via Call
          of Duty: Modern Warfare.
        </p>
        <button>
        <Icon icon="simple-icons:pcgamingwiki" />
          PLAY</button>
      </div>
    </div>
  );
}
