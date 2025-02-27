import { SearchItem } from "@/app/components/MusicApp/Search/SearchItem";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function SearchPage() {
  return (
    <>
      {/* Kết quả tìm kiếm */}
      <div className="mt-[30px]">
        <Title text="Kết quả tìm kiếm" />
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Song Item Play */}
          <Suspense>
            <SearchItem />
          </Suspense>
          {/* End Song Item Play */}
        </div>
      </div>
      {/* End Kết quả tìm kiếm */}
    </>
  );
}
