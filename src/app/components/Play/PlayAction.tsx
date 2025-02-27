"use client";

import {
  FaBackwardStep,
  FaPlay,
  FaForwardStep,
  FaPause,
} from "react-icons/fa6";

export const PlayAction = () => {
  const handlePlay = () => {
    const playAudio: HTMLElement | null = document.querySelector(".play-audio");
    const elementAudio = playAudio?.querySelector(
      ".inner-audio"
    ) as HTMLAudioElement | null;

    if (elementAudio && playAudio) {
      const elementButtonPlay = playAudio.querySelector(
        ".inner-button-play"
      ) as HTMLElement | null;

      if (elementButtonPlay) {
        if (elementButtonPlay.classList.contains("play")) {
          elementButtonPlay.classList.remove("play");
          elementAudio.pause(); // Dừng phát
        } else {
          elementButtonPlay.classList.add("play");
          elementAudio.play(); // Bắt đầu phát
        }
      }
    }
  };

  const handlePrev = () => {
    const currentSong = document.querySelector("[song-id].active");
    if (currentSong) {
      const prevSong = currentSong.previousElementSibling;
      if (prevSong) {
        const buttonPlay: HTMLElement | null =
          prevSong.querySelector(".inner-button-play");
        if (buttonPlay) {
          buttonPlay.click();
        }
      }
    }
  };

  const handleNext = () => {
    const currentSong = document.querySelector("[song-id].active");
    if (currentSong) {
      const nextSong = currentSong.nextElementSibling;
      if (nextSong) {
        const buttonPlay: HTMLElement | null =
          nextSong.querySelector(".inner-button-play");
        if (buttonPlay) {
          buttonPlay.click();
        }
      }
    }
  };
  return (
    <div className="flex items-center justify-center gap-x-[42px]">
      <button className="text-[16px] text-[white]" onClick={handlePrev}>
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
      <button className="text-[16px] text-[white]" onClick={handleNext}>
        <FaForwardStep />
      </button>
    </div>
  );
};
