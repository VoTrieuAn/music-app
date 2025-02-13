import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function CategoryDetailPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">
        Trang chi tiết danh mục bài hát
      </h1>
    </>
  );
}
