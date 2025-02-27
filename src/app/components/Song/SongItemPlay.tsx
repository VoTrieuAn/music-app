import Link from "next/link";
import { ButtonPlay } from "../Button/ButtonPlay";
import { ButtonHeart } from "../Button/ButtonHeart";

export const SongItemPlay = (props: any) => {
  const { item } = props;
  return (
    <div className="flex items-center justify-between py-[10px] px-[18px] rounded-[15px] bg-[#212121]">
      <div className="flex items-center gap-x-[12px] w-[40%]">
        <ButtonPlay item={item} className="text-[20px] text-white" />
        <div className="w-[42px] aspect-square rounded-[8px] truncate">
          <Link href={item.link}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        <Link href={item.link}>
          <h3 className="font-[700] text-[14px] text-white">{item.title}</h3>
        </Link>
      </div>
      <div className="w-[30%] text-center">
        <Link href={item.link}>
          <div className="font-[400] text-[14px] text-white capitalize">
            {item.singer}
          </div>
        </Link>
      </div>
      <div className="w-[30%] flex items-center justify-end gap-x-[18px]">
        <div className="font-[400] text-[14px] text-white">{item.time}</div>
        {/* <button className="text-[20px] text-white">
          <FaHeart />
        </button> */}
        <ButtonHeart item={item} />
      </div>
    </div>
  );
};
