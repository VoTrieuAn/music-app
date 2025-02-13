export const CardInfo = (props: any) => {
  const { info } = props;
  return (
    <>
      <div className="flex items-center gap-[20px]">
        <div className="w-[180px] aspect-square rounded-[15px] truncate">
          <img
            src={info.image}
            alt={info.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="font-[700] text-[35px] text-primary mb-[10px] leading-[42px]">
            {info.title}
          </h1>
          <p className="font-[400] text-[14px] leading-[17px] text-[#EFEEE0]">
            {info.description}
          </p>
        </div>
      </div>
    </>
  );
};
