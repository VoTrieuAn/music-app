import { FaPlay } from "react-icons/fa";
import { FaBackwardStep, FaForwardStep, FaVolumeHigh } from "react-icons/fa6";

export const Play = () => {
  return (
    <>
      <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 left-0 w-full py-[20px] z-[999]">
        <div className="container mx-auto flex items-center justify-between gap-x-[67px]">
          <div className="w-[218px] flex items-center gap-x-[12px]">
            <div className="w-[49px] aspect-square rounded-[14px] truncate">
              <img
                src="/demo/singer-avatar.png"
                alt="singer-avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-[15px] font-[700] text-white">Cô Hồng</h3>
              <p className="text-[12px] font-[700] text-[#FFFFFF70]">
                Hồ Quang Hiếu, Huỳnh Văn
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-center gap-x-[42px]">
              <button className="text-[16px] text-[white]">
                <FaBackwardStep />
              </button>
              <button className="text-[16px] text-[white] py-[8px] px-[8px] bg-primary rounded-full">
                <FaPlay />
              </button>
              <button className="text-[16px] text-[white]">
                <FaForwardStep />
              </button>
            </div>
            <div className="mt-[11px] relative">
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
        </div>
      </div>
    </>
  );
};
