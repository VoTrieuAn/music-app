"use client";

import { FaVolumeHigh } from "react-icons/fa6";

export const PlayVolume = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elementTotal = event.target;
    const value = parseFloat(elementTotal.value);
    const playAudio = document.querySelector(".play-audio");
    if (playAudio) {
      const elementAudio: HTMLAudioElement | null =
        playAudio?.querySelector(".inner-audio");
      const elementVolumeCurrent: HTMLElement | null = playAudio?.querySelector(
        ".inner-volume .inner-current"
      );
      if (elementAudio && elementVolumeCurrent) {
        elementAudio.volume = value / 100; // Vì volume quy về từ 0 đến 1
        elementVolumeCurrent.style.width = `${value}%`;
      }
    }
  };
  return (
    <div className="w-[184px] flex items-end gap-x-[6px] inner-volume">
      <button className="text-[16px] text-[white]">
        <FaVolumeHigh />
      </button>
      <div className="relative">
        <div className="h-[4px] w-[100%] bg-primary rounded-[50px] absolute left-0 top-[14px] inner-current"></div>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={100}
          className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
