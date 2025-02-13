import { CardInfo } from "@/app/components/Card/CardInfo";
import { SongItemPlay } from "@/app/components/Song/SongItemPlay";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function SongDetailPage() {
  const info = {
    image: "/demo/singer-image-1.png",
    title: "Cô Phòng",
    description: "Hồ Quang Hiếu, Huỳnh Văn",
  };

  const data = [
    {
      image: "/demo/singer-image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/singer-image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/singer-image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
  ];

  const lyrics = `
    Verse:
    Níu ngàn lời cũng không ngăn được
    Bàn chân bước đi không báo trước
    Có những điều cất riêng trong lòng
    Giờ bốn vách ngăn cùng cô phòng
    Trốn chạy rồi hàn huyên với men
    Cứ thế kết thân cùng ánh đèn
    Lối mòn ngày nào trên phố quen
    Vẫn đó dáng hình ngày người đến
    Pre:
    Rời xa, lòng đau, chết trong cơn u sầu
    Liệu rằng tình đời ai sẽ thấu
    Dĩ vãng xưa vẫn in sâu trong đầu (hah a hah)
    Chorus:
    Thời gian không thể xoá nhoà đôi ta
    Có chăng chỉ là mờ phai đi theo tháng năm
    Rồi khi tỉnh giấc mới chợt nhận ra
    Thật quá khó để quên đi một người
    Màn đêm u tối bao trùm không gian
    Nói thay tiếng lòng này từ lâu đã vỡ tan
    Thì ra duyên kiếp để mình gặp nhau
    Dạy nhau tốt hơn xong dành lại cho người sau…
  `;
  return (
    <>
      {/* Card Info */}
      <CardInfo info={info} />
      {/* End Card Info */}
      {/* Lời bài hát */}
      <div className="mt-[30px]">
        <Title text="Lời bài hát" />
        <div className="bg-[#212121] rounded-[15px] p-[20px]">
          {/* whitespace-pre-line: Cho phép không bỏ khoảng trắng để xuống hàng */}
          <p className="text-white whitespace-pre-line">{lyrics}</p>
        </div>
      </div>
      {/* End Lời bài hát */}
      {/* Bài hát cùng danh mục */}
      <div className="mt-[30px]">
        <Title text="Bài hát cùng sanh mục" />
        <div className="mt-[20px] grid grid-cols-1 gap-[10px]">
          {/* Song Item Play */}
          {data.map((item, index) => (
            <SongItemPlay key={index} item={item} />
          ))}
          {/* End Song Item Play */}
        </div>
      </div>
      {/* End Bài hát cùng danh mục */}
    </>
  );
}
