"use client";

export const PlayTime = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elementTotal = event.target;
    const value = parseFloat(elementTotal.value);
    const playAudio = document.querySelector(".play-audio");
    if (playAudio) {
      const elementAudio: HTMLAudioElement | null =
        playAudio?.querySelector(".inner-audio");
      if (elementAudio) {
        elementAudio.currentTime = value;
      }
    }
  };
  return (
    <div className="mt-[11px] relative inner-play-time">
      <div className="h-[4px] bg-primary rounded-[50px] absolute left-0 top-[14px] inner-current"></div>
      <input
        type="range"
        min={0}
        max={0}
        defaultValue={0}
        className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
        onChange={handleChange}
      />
    </div>
  );
};
