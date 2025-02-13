import { Metadata } from "next";

import { Title } from "../components/Title/Title";
import { SongItem } from "../components/Song/SongItem";
import { CardItem } from "../components/Card/CardItem";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function Home() {
  const dataSectionOne = [
    {
      image: "/demo/singer-image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      listen: 20000,
    },
    {
      image: "/demo/singer-image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      listen: 20000,
    },
    {
      image: "/demo/singer-image-1.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      listen: 20000,
    },
  ];

  const dataSectionTwo = [
    {
      image: "/demo/singer-image-2.png",
      title: "Nhạc trẻ",
      desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
    {
      image: "/demo/singer-image-2.png",
      title: "Nhạc trẻ",
      desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
  ];
  const dataSectionThree = [
    {
      image: "/demo/singer-image-2.png",
      title: "Hồ Quang Hiếu",
      desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
    {
      image: "/demo/singer-image-2.png",
      title: "Hồ Quang Hiếu",
      desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
  ];
  return (
    <>
      {/* Section one: Banner home + Nghe nhiều */}
      <div className="flex items-start gap-x-[20px]">
        <div className="w-[534px]">
          <div
            className="w-full flex items-center rounded-[15px] bg-cover"
            style={{ backgroundImage: "url('/demo/bg-1.jpg')" }}
          >
            <div className="flex-1 mr-[34px] ml-[30px]">
              <div className="font-[700] text-[32px] text-white mb-[6px]">
                Nhạc EDM
              </div>
              <p className="font-[500] text-[14px] text-white leading-[17px]">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
                nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </p>
            </div>
            <div className="w-[215px] mr-[22px] mt-[48px]">
              <img
                src="/demo/image-2.png"
                alt="Nhạc EDM"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Title text="Nghe Nhiều" />
          {/* List item */}
          <div className="flex flex-col gap-y-[12px]">
            {/* Item */}
            {dataSectionOne.map((item, index) => (
              <SongItem key={index} item={item} />
            ))}
            {/* End Item */}
          </div>
          {/* End List item */}
        </div>
      </div>
      {/* End Section one: Banner home + Nghe nhiều */}
      {/* Section two: Danh mục nổi bật */}
      <div className="mt-[30px]">
        <Title text="Danh mục nổi bật" />
        <div className="grid grid-cols-5 gap-[20px]">
          {/* Card Item */}
          {dataSectionTwo.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
          {/* End Card Item */}
        </div>
      </div>
      {/* End Section two: Danh mục nổi bật */}
      {/* Section three: Ca sĩ nổi bật */}
      <div className="mt-[30px]">
        <Title text="Ca sĩ nổi bật" />
        <div className="grid grid-cols-5 gap-[20px]">
          {/* Card Item */}
          {dataSectionThree.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
          {/* End Card Item */}
        </div>
      </div>
      {/* End Section three: Ca sĩ nổi bật */}
    </>
  );
}
