

import React, { useEffect, useRef } from "react";
import "../Videoinicio/Video.css"
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
    
    <div className='main'>
    <div className="overlay"></div>
    <video
          style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
          playsInline
          loop
          muted
         
          alt="All the devices"
          src="https://firebasestorage.googleapis.com/v0/b/prueba-a3c56.appspot.com/o/videoBg.mp4?alt=media&token=af61aa62-b2c2-4227-bb9b-9d39a9ba5d5f"
          ref={videoEl}
        />
    <div className="content">
    <h1 data-aos="fade-right" data-aos-duration="1000">THE</h1>
            <h2 data-aos="fade-right" data-aos-duration="800">WINTER</h2>
            <h2 data-aos="fade-right" data-aos-duration="800">BREACK</h2>
    </div>
</div>
   

    
    )
}