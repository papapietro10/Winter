

import React, { useEffect, useRef } from "react";

export const Video = ()=>{
    const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <div className="App">
     
      <div>
        <video
          style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
          playsInline
          loop
          muted
         
          alt="All the devices"
          src="https://firebasestorage.googleapis.com/v0/b/prueba-a3c56.appspot.com/o/videoBg.mp4?alt=media&token=af61aa62-b2c2-4227-bb9b-9d39a9ba5d5f"
          ref={videoEl}
        />
      </div>
    </div>
    )
}