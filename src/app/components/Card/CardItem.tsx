import Link from "next/link";

interface CardItem {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export const CardItem = (props: { item: CardItem }) => {
  const { item } = props;

  return (
    <>
      <div className="">
        <Link href={item.link}>
          <div className="w-[180px] aspect-square rounded-[15px] truncate mb-[10px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-[700] text-[14px] text-white mb-[10px] line-clamp-1">
            {item.title}
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF80] line-clamp-1">
            {item.description}
          </div>
        </Link>
      </div>
    </>
  );
};
