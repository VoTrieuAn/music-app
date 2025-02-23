"use client";

import {
  FaBackwardStep,
  FaPlay,
  FaForwardStep,
  FaPause,
} from "react-icons/fa6";

export const PlayAction = () => {
  const handlePlay = () => {
    const playAudio = document.querySelector(".play-audio");
    const elementAudio: any = playAudio?.querySelector(".inner-audio");
    if (playAudio) {
      const elementButtonPlay = playAudio.querySelector(".inner-button-play");
      if (elementButtonPlay?.classList.contains("play")) {
        elementButtonPlay?.classList.remove("play");
        elementAudio.pause();
      } else {
        elementButtonPlay?.classList.add("play");
        elementAudio.play();
      }
    }
  };
  return (
    <div className="flex items-center justify-center gap-x-[42px]">
      <button className="text-[16px] text-[white]">
        <FaBackwardStep />
      </button>

      <button
        className="text-[16px] text-[white] py-[8px] px-[8px] bg-primary rounded-full inner-button-play"
        onClick={handlePlay}
      >
        {/*  play */}
        <FaPlay className="inner-icon-play" />
        <FaPause className="inner-icon-pause" />
      </button>
      <button className="text-[16px] text-[white]">
        <FaForwardStep />
      </button>
    </div>
  );
};
