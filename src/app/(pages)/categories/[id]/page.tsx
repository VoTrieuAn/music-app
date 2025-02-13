import { CardInfo } from "@/app/components/Card/CardInfo";
import { SongItemPlay } from "@/app/components/Song/SongItemPlay";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";
import { FaPlay, FaRegHeart } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function CategoryDetailPage() {
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

  const info = {
    image: "/demo/singer-image-2.png",
    title: "Nhạc Trẻ",
    description:
      "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
  };
  return (
    <>
      {/* Card Infor */}
      <CardInfo info={info} />
      {/* End Card Infor */}
      {/* Danh mục bài hát */}
      <div className="mt-[30px]">
        <Title text="Danh sách bài hát" />
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Song Item Play */}
          {data.map((item, index) => (
            <SongItemPlay key={index} item={item} />
          ))}
          {/* End Song Item Play */}
        </div>
      </div>
      {/* End Danh mục bài hát */}
    </>
  );
}
