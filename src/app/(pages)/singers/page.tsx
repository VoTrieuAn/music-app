import { CardItem } from "@/app/components/Card/CardItem";
import { SingerItem } from "@/app/components/MusicApp/Singers/SingerItem";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function SongDetailPage() {
  return (
    <>
      {/* Danh sách ca sĩ */}
      <div className="mt-[30px]">
        <Title text="Danh sách ca sĩ" />
        <div className="grid grid-cols-5 gap-[20px]">
          {/* Card Item */}
          <SingerItem />
          {/* End Card Item */}
        </div>
      </div>
      {/* End Danh sách ca sĩ */}
    </>
  );
}
