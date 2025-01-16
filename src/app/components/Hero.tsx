"use client";
import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasClicked, setHasClicked] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  // 0 % 4 = 0 + 1 = 1
  // 1 % 4 = 1 + 1 = 2
  // 2 % 4 = 2 + 1 = 3
  // 3 % 4 = 3 + 1 = 4
  // 4 % 4 = 0 + 1 = 1
  // If the first number (a) is smaller than the second number (b), then:
  // a % b = a

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };
  const handleVideoLoaded = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh overflow-x-hidden w-screen">
      <div
        id="video-frame"
        className="relative overflow-hidden bg-blue-75 z-10 w-screen h-dvh rounded-lg"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 cursor-pointer overflow-hidden rounded-lg size-64">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                loop
                muted
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                id="current-video"
                onLoadedData={handleVideoLoaded}
                className="size-64 origin-center scale-150 object-cover object-center"
              ></video>
            </div>
          </div>
          <video
            loop
            muted
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoaded}
          ></video>
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 3 ? 1 : currentIndex
            )}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoaded}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
