import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function SearchPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang kết quả tìm kiếm</h1>
    </>
  );
}