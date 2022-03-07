import React from "react";
import Image from "next/image";
export default function CardGame({game}) {
    const {title, thumbnail, platform, genre, id,short_description} = game;
  return (
    <div className="cardGame">
      <Image src={thumbnail} width={365} height={206} alt="warzone" />
      <h2>{title}</h2>
      <div className="cardGame--category">
        <span >{genre}</span>
        <span className="cardGame--category--platform">{platform}</span>
      </div>
      <p>
       {short_description}
      </p>
    </div>
  );
}
/*
<div className="cardGame--image"></div>
      <div className="cardGame--image"></div>
*/
