"use client";

import { FaPlay } from "react-icons/fa";

export const ButtonPlay = (props: any) => {
  const { item } = props;
  const handlePlay = () => {
    const playAudio = document.querySelector(".play-audio");
    if (playAudio) {
      // Phát nhạc
      const elementAudio: any = playAudio?.querySelector(".inner-audio");
      const elementSource = elementAudio?.querySelector("source");
      if (elementSource) {
        elementSource.src = item.audio;
      }

      if (elementAudio) {
        elementAudio.load();
        elementAudio.play();
      }
      // Phát nhạc
      // Hiển thị khối Play
      playAudio?.classList.remove("hidden");
      // End hiển thị khối Play

      // Hiển thị thông tin lên thanh phát nhạc
      const elementImage: any = playAudio.querySelector(".inner-image");

      elementImage.src = item.image;
      elementImage.alt = item.title;

      const elementTitle: any = playAudio?.querySelector(".inner-title");
      elementTitle.innerHTML = item.title;

      const elementSinger: any = playAudio?.querySelector(".inner-singer");
      elementSinger.innerHTML = item.singer;
      // End hiển thị thông tin lên thanh phát nhạc

      // Hiển thị nút pause
      const elementButtonPlay = playAudio.querySelector(".inner-button-play");
      if (elementButtonPlay) {
        elementButtonPlay.classList.add("play");
      }
      // Lấy ra tổng thời gian của bài hát đây là 1 hàm sự kiện
      const elementPlayTimeCurrent: any = playAudio.querySelector(
        ".inner-play-time .inner-current"
      );
      const elementPlayTimeTotal: any = playAudio.querySelector(
        ".inner-play-time .inner-total"
      );
      elementAudio.onloadedmetadata = () => {
        const totalTime = elementAudio.duration;
        elementPlayTimeTotal.max = totalTime;
        // Lấy ra thời gian hiện tại
        elementAudio.ontimeupdate = () => {
          const currentTime = elementAudio.currentTime;
          const percent = (currentTime * 100) / totalTime;
          elementPlayTimeCurrent.style.width = `${percent.toFixed()}%`;
          elementPlayTimeTotal.value = currentTime.toFixed();
        };
      };
    }
  };

  return (
    <button className="p-[8px] bg-primary rounded-full" onClick={handlePlay}>
      <FaPlay className="text-[18px] text-white" />
    </button>
  );
};
