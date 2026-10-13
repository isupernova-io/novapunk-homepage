"use client";

import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative h-full">
      <video id="feature-video"
        ref={videoRef}
        loop
        autoPlay
        muted
        playsInline
        className="flex object-cover w-full h-full absolute -inset-full m-auto -z-10"
      >
        <source src="/videos/videos.mp4" type="video/mp4" />
        <source src="/videos/videos.webm" type="video/webm" />
      </video>

      <div className="absolute inset-e-4 bottom-4 z-100">
        <button
          onClick={togglePlay}
          className="size-10 flex items-center justify-center bg-default-900 text-white rounded-full cursor-pointer hover:bg-default-800 transition-colors"
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? (
            <Icon icon="tabler:player-pause-filled" className="size-4" />
          ) : (
            <Icon icon="tabler:player-play-filled" className="size-4" />
          )}
        </button>
      </div>

      <div className="decoration">
        <span className="decoration-top"></span>
        <span className="decoration-bottom"></span>
      </div>
    </div>
  );
};

export default VideoPlayer;
