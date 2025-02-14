import { SongItemPlay } from "@/app/components/Song/SongItemPlay";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài hát ưu thích",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function WishlistPage() {
  const data = [
    {
      image: "/demo/singer-image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/singer-image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/singer-image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
  ];
  return (
    <>
      <Title text="Bài hát yêu thích" />
      <div className="grid grid-cols-1 gap-[10px]">
        {/* Song Item Play */}
        {data.map((item, index) => (
          <SongItemPlay key={index} item={item} />
        ))}
        {/* End Song Item Play */}
      </div>
    </>
  );
}
