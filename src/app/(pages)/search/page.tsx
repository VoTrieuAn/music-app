import { SongItemPlay } from "@/app/components/Song/SongItemPlay";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function SearchPage() {
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
      {/* Kết quả tìm kiếm */}
      <div className="mt-[30px]">
        <Title text="Kết quả tìm kiếm" />
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Song Item Play */}
          {data.map((item, index) => (
            <SongItemPlay key={index} item={item} />
          ))}
          {/* End Song Item Play */}
        </div>
      </div>
      {/* End Kết quả tìm kiếm */}
    </>
  );
}
