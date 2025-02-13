import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function SingerDetailPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang chi tiết ca sĩ</h1>
    </>
  );
}