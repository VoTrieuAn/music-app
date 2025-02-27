import { Wishlist } from "@/app/components/MusicApp/Wishlist/Wishlist";
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
      link: "/",
    },
    {
      image: "/demo/singer-image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
      link: "/",
    },
    {
      image: "/demo/singer-image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
  ];
  return <Wishlist />;
}
