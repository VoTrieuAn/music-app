import { Wishlist } from "@/app/components/MusicApp/Wishlist/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài hát ưu thích",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function WishlistPage() {
  return <Wishlist />;
}
