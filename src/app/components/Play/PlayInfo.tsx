export const PlayInfo = () => {
  return (
    <div className="w-[218px] flex items-center gap-x-[12px]">
      <div className="w-[49px] aspect-square rounded-[14px] truncate">
        <img
          src="/"
          alt=""
          className="w-full h-full object-cover inner-image"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-[15px] font-[700] text-white inner-title line-clamp-1"></h3>
        <p className="text-[12px] font-[700] text-[#FFFFFF70] inner-singer line-clamp-1"></p>
      </div>
    </div>
  );
};
