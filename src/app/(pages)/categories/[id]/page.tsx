import { CategoriesInfo } from "@/app/components/MusicApp/Categories/CategoriesInfo";
import { CategoriesItem } from "@/app/components/MusicApp/Categories/CategoriesItem";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

interface CategoryDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CategoryDetailPage({
  params,
}: CategoryDetailPageProps) {
  const { id } = await params;

  return (
    <>
      {/* Card Infor */}
      <CategoriesInfo id={id} />
      {/* End Card Infor */}
      {/* Danh mục bài hát */}
      <div className="mt-[30px]">
        <Title text="Danh sách bài hát" />
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Song Item Play */}
          <CategoriesItem id={id} />
          {/* End Song Item Play */}
        </div>
      </div>
      {/* End Danh mục bài hát */}
    </>
  );
}
