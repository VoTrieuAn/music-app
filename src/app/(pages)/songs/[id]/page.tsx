import { Song } from "@/app/components/MusicApp/Song/Song";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default async function SongDetailPage(props: any) {
  const { id } = await props.params;

  return (
    <>
      <Song id={id} />
    </>
  );
}
