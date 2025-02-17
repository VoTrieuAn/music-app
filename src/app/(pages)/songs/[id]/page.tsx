import { CardInfo } from "@/app/components/Card/CardInfo";
import { SongInfo } from "@/app/components/MusicApp/Song/SongInfo";
import { SongListItem } from "@/app/components/MusicApp/Song/SongListItem";
import { SongLyric } from "@/app/components/MusicApp/Song/SongLyric";
import { SongItemPlay } from "@/app/components/Song/SongItemPlay";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";
import { useParams } from "next/navigation";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default async function SongDetailPage(props: any) {
  const { id } = await props.params;

  // const data = [
  //   {
  //     image: "/demo/singer-image-1.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32",
  //     link: "",
  //   },
  //   {
  //     image: "/demo/singer-image-1.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32",
  //     link: "",
  //   },
  //   {
  //     image: "/demo/singer-image-1.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32",
  //     link: "",
  //   },
  // ];
  return (
    <>
      {/* Song Info */}
      <SongInfo id={id} />
      {/* End Song Info */}
      {/* Lời bài hát */}
      <div className="mt-[30px]">
        <Title text="Lời bài hát" />
        <div className="bg-[#212121] rounded-[15px] p-[20px]">
          <SongLyric id={id} />
        </div>
      </div>
      {/* End Lời bài hát */}
      {/* Bài hát cùng danh mục */}
      <div className="mt-[30px]">
        <Title text="Bài hát cùng danh mục" />
        <div className="mt-[20px] grid grid-cols-1 gap-[10px]">
          {/* Song Item Play */}
          <SongListItem id={id} />
          {/* End Song Item Play */}
        </div>
      </div>
      {/* End Bài hát cùng danh mục */}
    </>
  );
}
