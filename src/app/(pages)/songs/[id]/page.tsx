import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function SongDetailPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang chi tiết bài hát</h1>
    </>
  );
}