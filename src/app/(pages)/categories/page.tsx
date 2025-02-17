import { CategoriesListItem } from "@/app/components/MusicApp/Categories/CategoriesListItem";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết danh mục bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function CategoriesPage() {
  return (
    <>
      {/* Section two: Danh mục nổi bật */}
      <div className="mt-[30px]">
        <Title text="Danh mục nổi bật" />
        <div className="grid grid-cols-5 gap-[20px]">
          {/* Card Item */}
          <CategoriesListItem />
          {/* End Card Item */}
        </div>
      </div>
      {/* End Section two: Danh mục nổi bật */}
    </>
  );
}
