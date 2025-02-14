import { CardItem } from "@/app/components/Card/CardItem";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function SongDetailPage() {
  const data = [
    {
      image: "/demo/singer-image-2.png",
      title: "Hồ Quang Hiếu",
      desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
    {
      image: "/demo/singer-image-2.png",
      title: "Hồ Quang Hiếu",
      desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
  ];

  return (
    <>
      {/* Danh sách ca sĩ */}
      <div className="mt-[30px]">
        <Title text="Danh sách ca sĩ" />
        <div className="grid grid-cols-5 gap-[20px]">
          {/* Card Item */}
          {data.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
          {/* End Card Item */}
        </div>
      </div>
      {/* End Danh sách ca sĩ */}
    </>
  );
}
