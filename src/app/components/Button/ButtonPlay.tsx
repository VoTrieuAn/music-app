"use client";

import { FaPlay } from "react-icons/fa";

interface Song {
  id: string;
  image: string;
  title: string;
  singer: string;
  listen?: number;
  link: string;
  audio: string;
  time?: string;
  wishlist?: Record<string, boolean>;
}

export const ButtonPlay = (props: { item: Song; className: string }) => {
  const { item, className } = props;
  const handlePlay = () => {
    const playAudio = document.querySelector(".play-audio");
    if (playAudio) {
      // Phát nhạc
      const elementAudio: HTMLAudioElement | null =
        playAudio?.querySelector(".inner-audio");
      if (elementAudio) {
        const elementSource = elementAudio?.querySelector("source");
        if (elementSource) {
          elementSource.src = item.audio;
        }
        elementAudio.load();
        elementAudio.play();
      }

      // Phát nhạc
      // Hiển thị khối Play
      playAudio?.classList.remove("hidden");
      // End hiển thị khối Play

      // Hiển thị thông tin lên thanh phát nhạc
      const elementImage: HTMLImageElement | null =
        playAudio.querySelector(".inner-image");

      if (elementImage) {
        elementImage.src = item.image;
        elementImage.alt = item.title;
      }

      const elementTitle: HTMLElement | null =
        playAudio?.querySelector(".inner-title");
      if (elementTitle) {
        elementTitle.innerHTML = item.title;
      }

      const elementSinger: HTMLElement | null =
        playAudio?.querySelector(".inner-singer");
      if (elementSinger) {
        elementSinger.innerHTML = item.singer;
      }
      // End hiển thị thông tin lên thanh phát nhạc

      // Hiển thị nút pause
      const elementButtonPlay = playAudio.querySelector(".inner-button-play");
      if (elementButtonPlay) {
        elementButtonPlay.classList.add("play");
      }
      // Lấy ra tổng thời gian của bài hát đây là 1 hàm sự kiện
      const elementPlayTimeCurrent: HTMLElement | null =
        playAudio.querySelector(".inner-play-time .inner-current");
      const elementPlayTimeTotal: HTMLInputElement | null =
        playAudio.querySelector(".inner-play-time .inner-total");
      if (elementAudio) {
        if (elementPlayTimeCurrent && elementPlayTimeTotal) {
          elementAudio.onloadedmetadata = () => {
            const totalTime = elementAudio.duration;
            if (elementPlayTimeTotal) {
            }
            elementPlayTimeTotal.max = totalTime.toString();
            // Lấy ra thời gian hiện tại
            elementAudio.ontimeupdate = () => {
              const currentTime = elementAudio.currentTime;
              const percent = (currentTime * 100) / totalTime;
              elementPlayTimeCurrent.style.width = `${percent.toFixed()}%`;
              elementPlayTimeTotal.value = currentTime.toFixed();
            };
          };
        }
      }
    }
    // Xóa hết class active cho bài hát trước đó đang phát
    const elementSongOld = document.querySelector("[song-id].active");

    if (elementSongOld) {
      elementSongOld.classList.remove("active");
    }

    // Thêm class active cho bài hát đang phát
    const id = item.id;
    const elementSong = document.querySelector(`[song-id="${id}"]`);
    elementSong?.classList.add("active");
  };

  return (
    <button className={className} onClick={handlePlay}>
      <FaPlay className="text-[18px] text-white" />
    </button>
  );
};
