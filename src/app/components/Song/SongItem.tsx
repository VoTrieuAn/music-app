import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { ButtonPlay } from "../Button/ButtonPlay";

export const SongItem = (props: any) => {
  const { item } = props;

  return (
    <div className="flex items-center justify-between p-[10px] bg-[#212121] rounded-[15px]">
      <div className="flex items-center gap-x-[10px]">
        <Link
          href={item.link}
          className="w-[76px] aspect-square rounded-[10px] truncate"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </Link>
        <div className="">
          <div className="mb-[5px]">
            <Link
              href={item.link}
              className="font-[600] text-[16px] text-white"
            >
              {item.title}
            </Link>
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF80] mb-[8px] capitalize">
            {item.singer}
          </div>
          <div className="font-[400] text-[12px] text-white">
            {item.listen.toLocaleString()} lượt nghe
          </div>
        </div>
      </div>
      <div className="flex gap-x-[10px]">
        <ButtonPlay item={item} />
        <button className="p-[8px] bg-primary rounded-full">
          <FaRegHeart className="text-[18px] text-white" />
        </button>
      </div>
    </div>
  );
};
