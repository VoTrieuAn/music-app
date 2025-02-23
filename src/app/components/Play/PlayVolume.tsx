import { FaVolumeHigh } from "react-icons/fa6";

export const PlayVolume = () => {
  return (
    <div className="w-[184px] flex items-end gap-x-[6px]">
      <button className="text-[16px] text-[white]">
        <FaVolumeHigh />
      </button>
      <div className="relative">
        <div className="h-[4px] w-[80%] bg-primary rounded-[50px] absolute left-0 top-[14px]"></div>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={80}
          className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm"
        />
      </div>
    </div>
  );
};
