import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function SongDetailPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang danh sách ca sĩ</h1>
    </>
  );
}