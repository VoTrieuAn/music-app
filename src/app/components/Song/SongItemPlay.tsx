import { FaPlay, FaRegHeart } from "react-icons/fa";

export const SongItemPlay = (props: any) => {
  const { item } = props;
  return (
    <div className="flex items-center justify-between py-[10px] px-[18px] rounded-[15px] bg-[#212121]">
      <div className="flex items-center gap-x-[12px]">
        <button className="text-[24px] text-white">
          <FaPlay />
        </button>
        <div className="w-[42px] aspect-square rounded-[8px] truncate">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-[700] text-[14px] text-white">{item.title}</h3>
      </div>
      <div className="font-[400] text-[14px] text-white capitalize">
        {item.singer}
      </div>
      <div className="flex items-center gap-x-[18px]">
        <div className="font-[400] text-[14px] text-white">{item.time}</div>
        <button className="text-[20px] text-white">
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
};
