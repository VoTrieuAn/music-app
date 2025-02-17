export const CardInfo = (props: any) => {
  const { image, title, description } = props;

  return (
    <>
      <div className="flex items-center gap-[20px]">
        <div className="w-[180px] aspect-square rounded-[15px] truncate">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h1 className="font-[700] text-[35px] text-primary mb-[10px] leading-[42px]">
            {title}
          </h1>
          <p className="font-[400] text-[14px] leading-[17px] text-[#EFEEE0]">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
