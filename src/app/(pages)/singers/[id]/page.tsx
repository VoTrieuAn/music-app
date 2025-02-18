import { SingerInfo } from "@/app/components/MusicApp/Singers/SingerInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default async function SingerDetailPage(props: any) {
  const { id } = await props.params;

  return (
    <>
      <SingerInfo id={id} />
    </>
  );
}
