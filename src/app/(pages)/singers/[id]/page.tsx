import { SingerInfo } from "@/app/components/MusicApp/Singers/SingerInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

interface SingerDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function SingerDetailPage({
  params,
}: SingerDetailPageProps) {
  const { id } = await params;
  console.log(id);

  return (
    <>
      <SingerInfo id={id} />
    </>
  );
}
