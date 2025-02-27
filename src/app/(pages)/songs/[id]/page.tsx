import { Song } from "@/app/components/MusicApp/Song/Song";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

interface SongDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function SongDetailPage({ params }: SongDetailPageProps) {
  const { id } = await params;

  return (
    <>
      <Song id={id} />
    </>
  );
}
